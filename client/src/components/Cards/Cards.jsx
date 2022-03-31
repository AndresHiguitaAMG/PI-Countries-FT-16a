import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cards.modules.css';

const Cards = ({ flag, name, continent, id }) => {
    return (
        <div className = "container">
        <div className = "cards">
            <div className = "card-image">
                <img src={flag} alt="img not found" />
            </div>
            
            <div className = "card-text">
                <h3>{name}</h3>
                <p  className = "cards-continents">{continent}</p>
            </div>
            
            <div className = "card-footer">
                <NavLink to={`/detail/${id}`}>
                    <button>Read More</button>
                </NavLink>
            </div>
        </div>
    </div>
    );
}
 
export default Cards;