import React from 'react'
import MyNav from './MyNav'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'

export default function NotFound() {
    const {theme}=useContext(ThemeContext)
  return (
    <>
    <MyNav />
    <Container className={'mt-4'+(theme=='dark'?' text-light':'')}>
    <h2>Attenzione:<br/> L'indirizzo che stai cercando di raggiungere sembra non esistere, ovvero non hai l'accesso a questa pagina</h2>
    </Container>
    </>
  )
}
//devo agiure su tutto il badi per il cambio tema che rimane bianco 