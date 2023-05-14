import React from 'react'
import { ThemeProvider } from './themeContext'
import Todo from './Todo'

function App() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  )
}

export default App
