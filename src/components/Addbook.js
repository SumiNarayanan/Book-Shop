import React from 'react'

const Addbook = () => {
  return (
    <>
    <div className='BookformContainer'>
<h2>ADD NEW BOOK</h2>
<form className='bookForm'>
<input type='text' placeholder='Category'/>
<input type='text' placeholder='Book title'/>
<input type='text' placeholder='Author'/>
<button>ADD BOOK</button>
</form>
    </div>
    </>
  )
}

export default Addbook