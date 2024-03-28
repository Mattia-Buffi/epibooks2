import React from 'react'
import MyNav from './MyNav'
import AllBooks from './AllBooks'
import MenuCategory from './MenuCategory'
import { useState } from 'react'

export default function Home() {
    const [category,setCategory]=useState(null)
  return (
    <>
    <MyNav />
      {category&&(
        <AllBooks category={category} />
      )}
      {category==null && (
        <MenuCategory setCategory={setCategory}/>
      )}
    </>
  )
}
