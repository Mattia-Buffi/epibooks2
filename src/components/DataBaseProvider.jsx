import React from 'react'
import { createContext } from 'react'

export const DataBase=createContext(null);
export default function DataBaseProvider({children}) {
    const value={
        dataCategory:{
            'fantasy':require('../dataBooks/fantasy.json'), 
            'history':require('../dataBooks/history.json'),
            'horror':require('../dataBooks/horror.json'),
            'romance':require('../dataBooks/romance.json'),
            'scifi':require('../dataBooks/scifi.json')
        }
    }
    return (
    <DataBase.Provider value={value}>
        {children}
    </DataBase.Provider>
  )
}
