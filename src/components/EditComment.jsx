import React, { useContext, useState } from 'react'
import { Button , Modal , Form } from 'react-bootstrap';
import { ThemeContext } from './ThemeContextProvider'

export default function EditComment({comment}) {
     //Endpoint
     const serverAPI='https://striveschool-api.herokuapp.com/api/comments/';
     const idAPI='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2Q4MTljNDM3MDAwMTkzYzM1ODYiLCJpYXQiOjE3MTIxNzUwMTYsImV4cCI6MTcxMzM4NDYxNn0.wSgWFKAgLIaiSL3EHz27Af6qZ_rp4hiwt-BntblIkqA';
     const depedApi={
        headers:{"Authorization":idAPI,"content-type":"application/JSON"}
        } 
  const {theme}=useContext(ThemeContext)
  const [show,setShow]=useState(false);
  const [newRate,setNewRate]=useState(comment.rate)
  const [newComment,setNewComment]=useState(comment.comment)
  async function savedEditComment(){
    let newData={
        "elementId":comment.elementId,
        "comment":newComment,
        "rate":newRate
    }
    let body={method:"PUT", body:JSON.stringify(newData),...depedApi}
    try {let response = await fetch(serverAPI+comment._id,body)
    if(response.ok){
      //messaggio di evvenuto inserimento
      setShow(false)
    }else{
      const error = new Error(`HTTP Error! Status: ${response.status}`)
      error.response=response;
      throw error;
    }    
    } catch (error) {
        console.error(error)
    }
  
    }
  async function deleteComment(){
    let body={method:"DELETE",...depedApi}
    try {let response = await fetch(serverAPI+comment._id,body)
    if(response.ok){
      
    }else{
      const error = new Error(`HTTP Error! Status: ${response.status}`)
      error.response=response;
      throw error;
    }    
    } catch (error) {
        console.error(error)
    }
  }
return (
    <div className='position-absolute end-0 top-0 m-1'>
        <Button className='btn-primary p-1 me-2' onClick={()=>setShow(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
        </svg>
        </Button>
        <Button className='btn-danger p-1 me-2' onClick={()=>deleteComment()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
        </Button>
        {/* modale per modifica commento */}
        <Modal
            show={show}
            onHide={()=>setShow(false)}
            backdrop="static"
            keyboard={false}
            data-bs-theme={theme}
            className={theme==='dark'?'text-white':''}
            >
        <Modal.Header closeButton>
          <Modal.Title>Modifica Commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className={theme==='dark'?'text-secondary':''}>Puoi Modificare il testo del commento ed il punteggio</h4>
          <Form className={(theme==='light'?'':'text-secondary')} >
        <Form.Group className="mb-3" controlId="commento">
            <Form.Label>Riferimento commento: {comment._id}</Form.Label>
            <Form.Control as="textarea" value={newComment} rows={2} data-bs-theme={theme} onChange={(e)=>setNewComment(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="reting">
            <Form.Label>Inserisci rate: <strong className={theme==='dark'?'text-white':''}>{newRate} </strong> / 5</Form.Label>
            <Form.Range min={1} max={5} step={1} value={newRate} onChange={(e)=>setNewRate(e.target.value)}/>
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>savedEditComment()}>Change</Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}
