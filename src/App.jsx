import React from "react"
import { ThemeProvider } from "./Context/theme"

function App() {
    const [themeMode, setThemeMode] = React.useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    
    const darkTheme = () => {
        setThemeMode("dark")
    }

    //actual change in theme
    React.useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme btns */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/* cards */}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App