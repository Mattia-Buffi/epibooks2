import React, { useContext } from 'react'
import SkeletonComment from './Skeleton/SkeletonComment'
import FocusBook from './FocusBook'
import { useEffect } from 'react'
import { useState } from 'react'
import SingleComment from './SingleComment'
import AddComment from './AddComment'
import MessageUtente from './MessageUtente'
import { ThemeContext } from './ThemeContextProvider'

export default function CommentArea({selected}) {
  const {theme}=useContext(ThemeContext);
  const [allComment,setAllComment]=useState([]);
  const [loader,setLoader]=useState(false);
  const [newComment,setNewComment]=useState({});
  const [uxMessage,setUxMessage]=useState(false)
  let messaggio="Registrazione avvenuta con successo"
  let variant='right';
     //Endpoint
  const serverAPI='https://striveschool-api.herokuapp.com/api';
  const idAPI='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2Q4MTljNDM3MDAwMTkzYzM1ODYiLCJpYXQiOjE3MTIxNzUwMTYsImV4cCI6MTcxMzM4NDYxNn0.wSgWFKAgLIaiSL3EHz27Af6qZ_rp4hiwt-BntblIkqA';
  const depedApi={
    headers:{"Authorization":idAPI,"content-type":"application/JSON"}
}
  async function downloadComment(){
    setLoader(true);
    try {
      let response= await fetch(serverAPI+'/books/'+selected.asin+'/comments',depedApi);
      if(response.ok){
        const result=await response.json();
        setLoader(false);
        setUxMessage(true)
        setAllComment(result);
      }else{
        const error = new Error(`HTTP Error! Status: ${response.status}`)
        error.response=response;
        throw error;
      }
    } catch (err) {
      console.error(err)
    }
  }
  async function upLoadComment(){
    let body={method:"POST", body:JSON.stringify(newComment),...depedApi}
    try {let response = await fetch(serverAPI+'/comments',body)
    if(response.ok){
      downloadComment()
    }else{
      const error = new Error(`HTTP Error! Status: ${response.status}`)
      error.response=response;
      throw error;
    }    
    } catch (error) {
        console.error(error)
    }
  } 
  useEffect(()=>{
    selected!=null && downloadComment()
  },[selected])

  useEffect(()=>{
    newComment&&upLoadComment()
  },[newComment])
  
  return (
    <div className='me-4 pb-4'>
    {selected==null&&<h3 className={'text-'+(theme==='light'?'dark':'light')}>Click on a book to see more info and all comments about it</h3>}
    {selected && (
      <>
        <FocusBook  selected={selected}/> 
        {loader && (
          new Array(3).fill(0).map((el)=><SkeletonComment key={el}/>)
        )}
        {allComment.length===0 && <h3 className={'mt-4 text-'+(theme==='light'?'dark':'light')}>No comment yet. Be the first below</h3>}
        {allComment && (
          allComment.map((el)=><SingleComment key={el._id} comment={el} downloadComment={downloadComment}/>)
        )}
        {uxMessage && <MessageUtente messaggio={messaggio} variant={variant} setUxMessage={setUxMessage}/>}
        <AddComment asin={selected.asin} setNewComment={setNewComment}/>
      </>       
    )}
    </div>
  )
}
