import React from 'react'
import { Card } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'
import EditComment from './EditComment'

export default function SingleComment({comment,downloadComment}) {
  const {theme}=useContext(ThemeContext)
  return (
    <Card className='my-3' data-bs-theme={theme}>
      <Card.Header className='position-relative'>
        {new Array(comment.rate).fill(0).map(()=>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>)
      }
      <EditComment comment={comment} downloadComment={downloadComment} />
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}{comment.comment}{' '}
          </p>
          <footer className="blockquote-footer">
            {comment.author}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}
