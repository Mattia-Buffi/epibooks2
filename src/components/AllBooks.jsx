import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { DataBase } from './DataBaseProvider';


export default function AllBooks({category,searchRecord}) {
    
//stati 
    const {theme}=useContext(ThemeContext)
    const {dataCategory}=useContext(DataBase)
    const [selected,setSelected]=useState(null)
    useEffect(()=>{
      console.log(searchRecord)
      setSelected(null)},[searchRecord]); //tolgo il select 
  return (
    <div className={`row bg-${theme} pt-4`} style={{height:'100vh',overflow:'hidden'}} >
        <div className='col-8 d-flex flex-wrap justify-content-evenly' style={{height:'100vh',overflow:'scroll'}}>
            {(searchRecord.length<1)&&(dataCategory[category].map((el)=>(<SingleBook book={el} setSelected={setSelected} selected={selected}/>)))
            }
            { searchRecord.map((el)=>(<SingleBook book={el} setSelected={setSelected} selected={selected}/>))
            }
        </div>
        <div className="col-4" style={{height:'100vh',overflow:'scroll'}}>
            <CommentArea selected={selected}/>
        </div>

    </div>
  )
}
