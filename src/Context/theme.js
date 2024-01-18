import React from "react";
import { useContext } from "react";

export const ThemeContext = React.useContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme