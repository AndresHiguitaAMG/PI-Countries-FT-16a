import React from 'react'
import { NavLink } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';
import './NavBar.modules.css';

const NavBar = () => {
  return (
    <div>
        {/* <div className='s'>
            <SearchBar />
        </div> */}

        <div className='menu'>
        <ul>
            <li>
                <NavLink className='w' to = "/home/create">
                    Create
                </NavLink>
            </li>

            <li>
                <NavLink className='w' to = "/">
                    Landing Page
                </NavLink>
            </li>
        </ul>
    </div>
    </div>
    
  )
}

export default NavBar;