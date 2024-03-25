import React from 'react'
import { Button } from 'react-bootstrap'

export default function MenuCategory({setCategory}) {
  let category=['fantasy','history','scifi','horror','romance']
    return (
    <div className='row g-3 m-3 justify-content-center'>
        {category.map((el)=><Button key={el} className='col-4 m-2' onClick={()=>setCategory(el)}>{el}</Button>)}
    </div>
  )
}
