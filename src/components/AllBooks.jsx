import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

export default function AllBooks({category}) {
// importo tutti i file che ho a disposizione 
    let dataCategory={
        'fantasy':require('../dataBooks/fantasy.json'), 
        'history':require('../dataBooks/history.json'),
        'horror':require('../dataBooks/horror.json'),
        'romance':require('../dataBooks/romance.json'),
        'scifi':require('../dataBooks/scifi.json')
    }
    
//stati 
    const {theme}=useContext(ThemeContext)
    const [selected,setSelected]=useState(null)
  return (
    <div className={`row bg-${theme} pt-4`} style={{height:'100vh',overflow:'hidden'}} >
        <div className='col-8 d-flex flex-wrap justify-content-evenly' style={{height:'100vh',overflow:'scroll'}}>
            {dataCategory[category].map((el)=>(
                <SingleBook book={el} setSelected={setSelected} selected={selected}/>
            ))}
        </div>
        <div className="col-4" style={{height:'100vh',overflow:'scroll'}}>
            <CommentArea selected={selected}/>
        </div>

    </div>
  )
}
