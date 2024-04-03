import './App.css';
//context
import ThemeContextProvider  from './components/ThemeContextProvider';
import MenuProvider from './components/MenuContext';
import DataBase from './components/DataBaseProvider';
//Hook
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//component
import Home from './components/Home';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';

function App() {
  //Tema light e dark
  //Menu per medifiche in base alle preferenze ad esempio
  //Dati book
  return (
    <ThemeContextProvider>
    <MenuProvider>
      <DataBase>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/BookDetails/:asin' element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
      </DataBase>
    </MenuProvider>
    </ThemeContextProvider>
  );
}

export default App;
