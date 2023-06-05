import React from 'react'

import Booklist from './Booklist'

const Categories = ({bookList}) => {
  return (
    <>
    <div className='categoryContainer'>
    <h1>Categories</h1>
    <div className="CategorySelector ">
        <select className='select'>
            <option>All</option>
            <option>All</option>
        </select>
    </div>
</div>

<div className='wrapperBooklist'>
<Booklist bookList={bookList}/>
</div>

   
    
    </>
  )
}

export default Categories