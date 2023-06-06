
import React ,{useState}from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';


 
function App() {

  const[bookList,setBookList]  =useState([]) 
    
    
  const addBook=(newBook)=>{
      const newBooklist=[...bookList,newBook]
      setBookList(newBooklist);
   } 

   const removeBook=(index)=>{
      const newBooklist=[...bookList]
      newBooklist.splice(index,1)
      setBookList(newBooklist)

   }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route exact path='/'  element={<Navigate to ='/books'/>}/>
            <Route path='/books' element={<Books bookList={bookList} addBook={addBook} removeBook={removeBook} />}/>
<Route path='/categories' element={<Categories bookList={bookList}/>}/>

      </Routes>
    
  
      </BrowserRouter>
       
        
      
    
    </div>
  );
}

export default App;
