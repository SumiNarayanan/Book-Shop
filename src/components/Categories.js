import React from 'react'
import CategoryWrapper from './CategoryWrapper'
import Booklist from './Booklist'

const Categories = ({bookList}) => {
  return (
    <>
    <CategoryWrapper booklist={bookList}/>
    <Booklist />
    </>
  )
}

export default Categories