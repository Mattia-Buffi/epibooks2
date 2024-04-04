import React from 'react'
import { useContext } from 'react'
import MyNav from './MyNav'
import FocusBook from './FocusBook'
import { useParams } from 'react-router-dom'
import { ThemeContext } from './ThemeContextProvider'
import { DataBase } from './DataBaseProvider'

export default function BookDetails() {
    const {asin}=useParams()
    const {theme}=useContext(ThemeContext)
    const {dataCategory}=useContext(DataBase)
    const bookFocus=[
      ...dataCategory.fantasy.filter((book)=>book.asin==asin),
      ...dataCategory.history.filter((book)=>book.asin==asin),
      ...dataCategory.horror.filter((book)=>book.asin==asin),
      ...dataCategory.romance.filter((book)=>book.asin==asin),
      ...dataCategory.scifi.filter((book)=>book.asin==asin)
    ]
    console.log(bookFocus)
    // let ricerca=()=>{
    //     dataCategory.fantasy.findIndex((el)=>{el.asin==asin})>0&& return 
    // }
  return (
    <>
    <MyNav />
    <div className='text-center bg-secondary p-3 m-4'>
    <FocusBook  selected={bookFocus[0]}/>
    </div>
    </>
  )
}
