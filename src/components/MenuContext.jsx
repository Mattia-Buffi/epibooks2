import React, { useState } from 'react'
import { createContext } from 'react'

//contesto per poter modificare le varie voci del menu 

export const MenuProvider=createContext(null)
export default function MenuContext({children}) {
    const [menuNav,setMenuNav]=useState(['HOME','Product','Browse'])
    const value={menuNav,setMenuNav};
    return (
    <MenuProvider.Provider value={value}>
        {children}
    </MenuProvider.Provider>
  )
}
