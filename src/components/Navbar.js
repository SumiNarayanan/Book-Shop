import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      
      
        <div className="navBar">
          <h1>BookStore CMS</h1>
         
            <div className="navbarList">
              <ul>
                <li>
                  
                  <Link to='/books'>BOOKS</Link>
                </li>
                <li>
                  
                <Link to='/categories'>CATEGORIES</Link>
                </li>
              </ul>
             
            
            </div>
            <div className="navbarIcon">
                <AccountCircleIcon fontSize="large"  style={{color:'blue  '}}/>
              </div>
          
        </div>
        
         
        
        
      


      
      
    );
  };

export default Navbar