import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Welcome() {
  return (
    <Alert variant="success" dismissible>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Benvenuto su EpiBooks
        Aww yeah, you successfully read this important alert message. Today shipping tax for free
      </p>
      <hr />
      <p className="mb-0">
        Scegli il genere che piu ti piace
      </p>
    </Alert>
  )
}
