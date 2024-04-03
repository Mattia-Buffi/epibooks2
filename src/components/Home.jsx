import React from 'react'
import MyNav from './MyNav'
import AllBooks from './AllBooks'
import MenuCategory from './MenuCategory'
import { useState } from 'react'
import Welcome from './Welcome'
import MyFooter from './MyFooter'

export default function Home() {
    const [category,setCategory]=useState(null)
    const [searchRecord,setSearchRecord]=useState([]);
//come visulaizzare la ricerca in base allo stato

  return (
    <>
    <Welcome/>
    <MyNav setSearchRecord={setSearchRecord}/>
      <MenuCategory focusCat={category} setCategory={setCategory}/>
      {(category!==null) &&(
        <AllBooks category={category} searchRecord={searchRecord}/>
      )}
      <MyFooter/>
    </>
  )
}
