import React from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContextProvider'

export default function FocusBook({selected}) {
    const {theme}=useContext(ThemeContext)
  return (
    <div className={'row '+(theme=='light'?'text-black':'text-white')}>
        <div className="col-3 justify-content-center">
            <img src={selected.img} height={100} width={75}/>
        </div>
        <div className="col-9 row">
            <div className="col-12">{selected.title}</div>
            <div className="col-12">media recensioni stelline ecc</div>
            <div className="col mt-2"><Button variant="primary">BUY for ${selected.price}</Button></div>
        </div>
    </div>
  )
}
