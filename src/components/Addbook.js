import React, { useState } from 'react'


const Addbook = ({addBook}) => {
  const[category,setCategory]=useState("");
  const[bookTitle,setBookTitle]=useState("");
  const[author,setAuthor]=useState("");


  const handleAddBook=(e)=>{
    e.preventDefault();
    const newBook={
      category,bookTitle,author
    }
    addBook(newBook);
    setCategory("");
    setBookTitle("");
    setAuthor("");


  }
 
  return (
    <>
    <div className='BookformContainer'>
<h2>ADD NEW BOOK</h2>
<form className='bookForm'>

<input type='text'
 placeholder='Category'
 value={category}
 onChange ={(e)=>setCategory(e.target.value)}/>
  

<input type='text'
 placeholder='Book title'
 value={bookTitle}
 onChange ={(e)=>setBookTitle(e.target.value)}/>

<input type='text'
 placeholder='Author'
 value={author}
 onChange ={(e)=>setAuthor(e.target.value)}/>
<button onClick={handleAddBook}>ADD BOOK</button>
</form>
    </div>
    </>
  )
}

export default Addbook