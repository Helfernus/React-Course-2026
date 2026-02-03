import React from "react";
// Todo: Create & manage context in this file
export const ThemeContext = React.createContext({
    theme: '',
    toggleTheme: () => { },
});

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = React.useState('dark');

    function handleThemeUpdate() {
        setTheme(previous => previous === 'dark' ? 'light' : 'dark');
    }

    const contextValue = {
        theme: theme,
        toggleTheme: handleThemeUpdate,
    }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}