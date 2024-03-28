import './App.css';
//context
import ThemeContextProvider from './components/ThemeContextProvider';
import MenuProvider from './components/MenuContext';
//Hook
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//component
import Home from './components/Home';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';

function App() {

  return (
    <ThemeContextProvider>
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/BookDetails/:asin' element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
    </ThemeContextProvider>
  );
}

export default App;
