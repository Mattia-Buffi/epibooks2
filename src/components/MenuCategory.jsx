import React from 'react'
import { Button } from 'react-bootstrap'

export default function MenuCategory({focusCat,setCategory}) {
  let category=['fantasy','history','scifi','horror','romance']
    console.log(focusCat)
    return (
    <div className='container d-flex my-1 p-3 justify-content-center'>
        {category.map((el)=><Button key={el} className={'mx-3 '+(focusCat===el?'btn-secondary':'btn-success')} onClick={()=>setCategory(el)}>{el}</Button>)}
    </div>
  )
}
