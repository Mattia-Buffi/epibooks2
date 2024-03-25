import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext(null)
export default function ThemeContextProvider({children}) {
    const [theme,setTheme]=useState('light');
    const value={setTheme,theme}
    return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
}
