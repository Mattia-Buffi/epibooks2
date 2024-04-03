import React from 'react'
import { Card,Button } from 'react-bootstrap'
import {ThemeContext} from './ThemeContextProvider'
import { useContext } from 'react' 
import { useNavigate } from 'react-router-dom'

export default function SingleBook({book,selected,setSelected}) {
    const {theme}=useContext(ThemeContext)
    const navigate=useNavigate();
    function selectBook(){
        setSelected(book)
    }
  return (
    <Card style={{ width: '12rem', margin: '10px 5px' }} data-bs-theme={theme} 
            className={selected?.asin==book.asin?'border-danger':'border-0'}
            onClick={selectBook}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className='text-center'>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <Button className='btn-primary mb-3' onClick={()=>navigate('/BookDetails/:'+book.asin)}>More info</Button>
    </Card>
  )
}
