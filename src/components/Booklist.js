import React, { useState } from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
const Booklist = () => {
    const[showModel,setShowModel]=useState(false);
    const[comment,setComment]=useState("")
    const[commentList,setCommentList]=useState([
        
    ])

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
      
    
  return (
    <>
      <div className="BookContainer">
        <div className="BookContent">
          <div className="BookContentMain">
            <p className="category">Category</p>
            <h3 className="bookTitle">Book Title</h3>
            <p className="author">Author</p>
            <div className="buttons">
              <button onClick={handleClick} >Comments</button>

              <button>Remove Book</button>
              <button>Edit</button>
            </div>
          </div>
        
          <div className="BookContentMiddle">
            <div className="progress">
              <PanoramaFishEyeIcon />
            </div>
            <div className="percentageContainer">
              <div className="percentageNumber">
                <span>64 %</span>
                <p className="completed">completed</p>
              </div>
            </div>
            </div>
            <div className="BookContentLast">
              <input type="text" placeholder="Enter updated Progress" />
              <input type="text" placeholder="Enter updated Progress" />
              <button>Save Progress</button>
            </div>
          
        </div>
      </div>
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
