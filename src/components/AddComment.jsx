import React, { useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import {ThemeContext} from './ThemeContextProvider'


export default function AddComment({asin,setNewComment}) {
    const [comment,setComment]=useState("")
    const [rate,setRate]=useState(1)
    const [rateTemp,setRateTemp]=useState([]);
    const starsDefault=new Array(5).fill(0).map(()=>(
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>))
    const {theme}=useContext(ThemeContext);
    useEffect(()=>{
      setRateTemp(
        starsDefault.map((el,i)=>(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={i<rate?'orange':'gray'} class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>))
      )
    },[rate])

  return (
    <Form className={"border-success border rounded p-2 my-4"+(theme==='light'?'':' text-secondary')} >
        <Form.Group className="mb-3" controlId="commento">
            <Form.Label>Inserisci il tuo commento</Form.Label>
            <Form.Control as="textarea" rows={2} data-bs-theme={theme} onChange={(e)=>setComment(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="reting">
            <Form.Label>Inserisci rate: <strong>{rate} / 5 </strong> <span>{rateTemp}</span></Form.Label>
            <Form.Range min={1} max={5} step={1} value={rate} onChange={(e)=>setRate(e.target.value)}/>
        </Form.Group>
        <Button variant="secondary" onClick={()=>setNewComment({"comment":comment,"rate":rate,"elementId":asin})}>Aggiungi Commento</Button>        
    </Form>
  )
}