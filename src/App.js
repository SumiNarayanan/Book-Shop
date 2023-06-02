
import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/books' element={<Books/>}/>
<Route path='/categories' element={<Categories/>}/>

      </Routes>
      
      </BrowserRouter>
       
        
      
    
    </div>
  );
}

export default App;
