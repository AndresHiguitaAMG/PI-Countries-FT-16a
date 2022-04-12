import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../redux/action';
import './SearchBar.modules.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ input, setInput ] = useState(""); //Tiene el valor del input

    const handleOnchage = (e) => {
        setInput(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getByName(input));
        setInput("");
    };

    return (
        <div className='content'>
            <div>
                <input
                type={"text"}
                placeholder={"Search..."}
                onChange={handleOnchage}
                />
            </div>
            
            <div className='sub'>
                <button
                type={'submit'} 
                onClick={handleOnSubmit}>
                Search🔍
                </button>
            </div>
        </div>
    )
}

export default SearchBar;