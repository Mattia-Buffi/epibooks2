import React from 'react'
import { Placeholder,Card } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContextProvider'

export default function SkeletonComment() {
  const {theme}=useContext(ThemeContext)
  return (
    <Card className='my-3' data-bs-theme={theme}>
      <Placeholder as="Card.Hearder" animation='glow'>
        <Placeholder xs={5}></Placeholder>
      </Placeholder>
      <Placeholder as="Card.Body" animation='glow'>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <Placeholder xs={10}></Placeholder>
            <Placeholder xs={10}></Placeholder>
            {' '}
          </p>
          <footer className="blockquote-footer">
            <Placeholder xs={6}></Placeholder>
          </footer>
        </blockquote>
      </Placeholder>
    </Card>
  )
}
