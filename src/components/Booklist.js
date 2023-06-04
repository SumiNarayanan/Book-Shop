import React, { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Booklist = ({bookList,removeBook}) => {
    const[showModel,setShowModel]=useState(false);
    const[comment,setComment]=useState("")
    const[commentList,setCommentList]=useState([])

    const[edit,setEdit]=useState(false)
    const[updatedProgress,setUpdatedProgress]=useState("")
    const[updatedChapter,setUpdatedChapter]=useState("")

    // const[bookList,setBookList]  =useState([])  
      const[saveProgress,setSaveProgress] =useState(false)
       
    

    const handleClick =()=>{
        setShowModel(true);
    }
        const handleClose= ()=>{
            setShowModel(false);
        }
       
        const handleSubmit = (e) => {
            e.preventDefault(); 
            if (comment.trim() !== "") {
              const newComment = [...commentList, comment.trim()];
              setCommentList(newComment);
              setComment("");
            }
          };
    //  const addBook=(newBook)=>{
    //     const newBooklist=[...bookList,newBook]
    //     setBookList(newBooklist);
    //  } 
    const handleRemoveTask=(index)=>{
        removeBook(index);
    }
    const handleUpdate=()=>{
        setEdit(!edit)
        if (edit) {
            // Apply the updated progress and chapter here
            // For example:
            setUpdatedProgress("");
            setUpdatedChapter("");
            setSaveProgress(false);
    }
}
    
    const handleSaveProgress=()=>{
        setSaveProgress(true); 
    }
  return (
    <>
   {bookList && bookList.map((book, index) => (
            <div className="BookContainer" key={index}>
            <div className="BookContent">
              <div className="BookContentMain">
                <p className="category">{book.category}</p>
                <h3 className="bookTitle">{book.bookTitle}</h3>
                <p className="author">{book.author}</p>
                <div className="buttons">
                  <button onClick={handleClick} >Comments</button>
    
                  <button onClick={handleRemoveTask}>Remove Book</button>
                  <button onClick={handleUpdate}>{edit ? "Edit":"Edit"}</button>
                </div>
              </div>
            
              <div className="BookContentMiddle">
                <div className="progress">
                <div className="progressValue" style={{transform:`rotate(${updatedProgress}deg)`}}> </div>
                </div>
                <div className="percentageContainer">
                  <div className="percentageNumber" >
                    <span>{updatedProgress} %</span>
                    <p className="completed">completed</p>
                  </div>
                </div>
                </div>
                <div className="BookContentLast">
                 
                  {edit? (
                    <div className="BookConentLastInput">
  <input type="number"
   placeholder="Enter updated Progress"
   value={updatedProgress} 
   onChange={(e)=>setUpdatedProgress(e.target.value)}/>

                  <input type="number"
                   placeholder="Enter updated Chapter" 
                   value={updatedChapter}
                   onChange={(e)=>setUpdatedChapter(e.target.value)}
                   /> 
                    {saveProgress ? (
                    <button onClick={handleSaveProgress}>Update Progress</button>
                  ) : (
                    <button onClick={handleSaveProgress}>Save Progress</button>
                  )}
                  </div>):(
                    <div className="BookConentLastValue">
                      <p className="currentPage">Current Page</p>
                      <p className="currentPagenumber">Page <span>0</span></p>
                      <button>Update Progress</button>
                      </div>
                  )
                  
}
                
                </div>
              
            </div>
          </div>
        
    ))}
  
      <div>
      <hr className="separator" />;
      </div>
      {showModel &&(
         <div className="modal">
         <div className="modalContent">
             <div className="modelContentButton">
             <button  type="button" onClick={handleClose}>×</button>    
             </div>
             <h2>Add a comment</h2>
             <form>
                 <textarea className="Comment"
                  placeholder="Write your comment here..."
                  value={comment}
                  onChange={(e)=>{
                    setComment(e.target.value)
                  }}
                  >
                     </textarea>
                     <button type="submit" className="submit"  onClick={handleSubmit}

                     >Submit</button>
                     </form>
                     <div className="commentList">
                     {commentList.map((commentText,index)=>(
                       
                        <div className="comments" key={index}>{commentText}</div>
                        
                        
                        
                        

                     ))}
                     </div>
                     
                     </div>
                     </div>

      )}
     
                        
      
      
    </>
  );
};

export default Booklist;
