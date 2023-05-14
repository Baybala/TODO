import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeToggleContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeToggleContext)
}

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (theme) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {props.children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}
