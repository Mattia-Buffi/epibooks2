import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'


export default function MessageUtente({messaggio,variant,setUxMessage}) {
    const [show,setShow]=useState(true)
  if(variant==='right'){
    return (
    <div>
    <Toast bg='success' onClose={() => setShow(false)} show={show} delay={4000} autohide>
        <Toast.Header>
            <stron>Successo</stron>
        </Toast.Header>
        <Toast.Body>{messaggio}</Toast.Body>
    </Toast>
    </div>
  )}
  if(variant==='wrong'){
    return (
    <div>
    <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={4000} autohide>
        <Toast.Header>
            <stron>Attenzione</stron>
        </Toast.Header>
        <Toast.Body>{messaggio}</Toast.Body>
    </Toast>
    </div>
  )}
}
