import React ,{useState}from 'react'
import Booklist from './Booklist'
import Addbook from './Addbook'


const Books = () => {

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
    <>
<Booklist bookList={bookList} removeBook={removeBook}/>
<Addbook addBook={addBook}/>
    </>
  )
}

export default Books