import { React, useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch()
    const [ form, setForm ] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
    });

    


  return (
    <div>Form</div>
  )
}

export default Form;