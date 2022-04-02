import { React, useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch()
    const [ form, setForm ] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });

    


  return (
    <div>
      <div>
        <h1>Create</h1>
      </div>

      <div>
        <label>Name: </label>
        <input 
        type={"text"}
        placeholder={"name"}
        name={"name"}

        />

        <label>Difficulty: </label>
        <input 
        type={"number"}
        min="1" 
        max="5"
        placeholder={"difficulty"}
        name={"name"}
        />

        <label>Duration: </label>
        <input 
        type={"number"}
        min="1" 
        max="8"
        placeholder={"duration"}
        name={"name"}
        />

        <label>Season: </label>
        <input 
        type={"number"}
        placeholder={"duration"}
        name={"name"}
        />
      </div>
    </div>
  )
}

export default Form;