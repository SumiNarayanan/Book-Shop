import React ,{useState}from 'react'
import Booklist from './Booklist'
import Addbook from './Addbook'


const Books = () => {

    const[bookList,setBookList]  =useState([]) 
    
    
    const addBook=(newBook)=>{
        const newBooklist=[...bookList,newBook]
        setBookList(newBooklist);
     } 
  return (
    <>
<Booklist bookList={bookList}/>
<Addbook addBook={addBook}/>
    </>
  )
}

export default Books