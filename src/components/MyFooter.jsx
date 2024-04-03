import React from 'react'
import { ListGroup , ListGroupItem } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'

export default function MyFooter() {
    const {theme}=useContext(ThemeContext)
    //attivare navigate ed onClick per le farie pagine
    const menuFooter=[
        ['About Us','Company Story','Our Blog'],
        ['Books','Order Status','Coupon'],
        ['Meet Our Author','Contact form'],
        ['FAQs','Privacy Policy','Documentation']]

  return (
    <div className={'border-3 border-top border-success'+(theme==='light'?' bg-secondary':' bg-dark')}>
    <div className='d-flex justify-content-center p-3'>
            <ListGroup className='mx-1 bg-trasparent'>
                <ListGroupItem variant={theme}><strong>Know More</strong></ListGroupItem>
                {menuFooter[0].map(el=><ListGroupItem key={el} action variant={theme}>{el}</ListGroupItem>)}
            </ListGroup>
            <ListGroup className='mx-1'>
                <ListGroupItem variant={theme}><strong>Shop</strong></ListGroupItem>
                {menuFooter[1].map(el=><ListGroupItem key={el} action variant={theme}>{el}</ListGroupItem>)}
            </ListGroup>
            <ListGroup className='mx-1'>
                <ListGroupItem variant={theme}><strong>Contact</strong></ListGroupItem>
                {menuFooter[2].map(el=><ListGroupItem key={el} action variant={theme}>{el}</ListGroupItem>)}
            </ListGroup>
            <ListGroup className='mx-1'>
                <ListGroupItem variant={theme}><strong>Support</strong></ListGroupItem>
                {menuFooter[3].map(el=><ListGroupItem key={el} action variant={theme}>{el}</ListGroupItem>)}
            </ListGroup>
    </div>
    <div className={'mt-4 w-100 p-4 '+(theme==='light'?'':'text-light')}>Copyright EPIbook</div>
    </div>
  )
}
