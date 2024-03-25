import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import ThemeContextProvider from './components/ThemeContextProvider';
import AllBooks from './components/AllBooks';
import { useState } from 'react';
import MenuCategory from './components/MenuCategory';

function App() {
  const menuNav=['HOME','Product','Browse']
  const [category,setCategory]=useState(null)

  return (
    <ThemeContextProvider>
      <MyNav menu={menuNav}/>
      {category&&(
        <AllBooks category={category} />
      )}
      {category==null && (
        <MenuCategory setCategory={setCategory}/>
      )}
    </ThemeContextProvider>
  );
}

export default App;
