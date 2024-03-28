import React from 'react'
import { useContext } from 'react'
import MyNav from './MyNav'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './ThemeContextProvider'

export default function BookDetails() {
    const {asin}=useParams()
    const {theme}=useContext(ThemeContext)

    let dataCategory={
        'fantasy':require('../dataBooks/fantasy.json'), 
        'history':require('../dataBooks/history.json'),
        'horror':require('../dataBooks/horror.json'),
        'romance':require('../dataBooks/romance.json'),
        'scifi':require('../dataBooks/scifi.json')
    }
    // let ricerca=()=>{
    //     dataCategory.fantasy.findIndex((el)=>{el.asin==asin})>0&& return 
    // }
  return (
    <>
    <MyNav />
    <div>Dettagli vari dei libro con asin {asin}</div>
    </>
  )
}
