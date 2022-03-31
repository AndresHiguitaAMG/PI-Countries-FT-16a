import React from 'react';
import { NavLink } from 'react-router-dom';
 
const LandingPage = () => {
     return (
         <div>
             <NavLink to="/home">
                 <h1>Welcome Aboard</h1>
            </NavLink>
         </div>
     );
 }
  
 export default LandingPage;