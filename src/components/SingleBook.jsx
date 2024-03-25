import React from 'react'
import { Card,Button } from 'react-bootstrap'
import {ThemeContext} from './ThemeContextProvider'
import { useContext } from 'react' 

export default function SingleBook({book,selected,setSelected}) {
    const {theme}=useContext(ThemeContext)
    function selectBook(){
        setSelected(book)
    }
  return (
    <Card style={{ width: '12rem' }} data-bs-theme={theme} 
            className={selected?.asin==book.asin?'border-danger':'border-0'}
            onClick={selectBook}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className='text-center'>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
