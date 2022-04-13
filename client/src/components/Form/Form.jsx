import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCountries, postActivities } from '../../redux/action';
import './Form.modules.css';

const Form = () => {
    const dispatch = useDispatch();
    const { allCountries } = useSelector(state => state);
    const [ validate, setValidate ] = useState({});
    const [error, setError] = useState(true); 
    const [ form, setForm ] = useState({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: []
    });

    useEffect (() => {
      dispatch(getAllCountries());
    }, [dispatch]);

    const validation = (form) => {
      let validations = {};
      let regexName = /^[A-Z]+$/i;
      if (!form.name.trim()) {
        validations.name = "The name field is required"
      }
      else if (!regexName.test(form.name.trim())) {
        validations.name = "The name field only accepts letters";
      }
      if (!form.name.trim()) {
        validations.difficulty = "The difficulty field is required"
      }
      if (!form.duration.trim()) {
        validations.duration = "The duration field is required"
      }
      return validations;
    }

    const handleOnchangeActivity = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
      setValidate(validation({
        ...form,
        [e.target.name]: e.target.value
      }));
    };

    const handleSelectCountries = (e) => {
      setForm({
        ...form,
        countries: [...form.countries, e.target.value]
      });
    };

    const handleDeleteCountries = (d) => {
      setForm({
        ...form,
        countries: form.countries.filter(ct => ct !== d)
      });
    };

  const handleSelectSeason = (e) => {
    setForm({
      ...form,
      season: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivities(form));
    console.log(form);
    alert("Tourist activity successfully created")
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: []
    });
  };

  useEffect (() => {
    if (form.name.length > 0 && form.difficulty.length > 0 && form.duration.length > 0 && form.season.length > 0 && form.countries.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [form, setError]);

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  return (
    <div>
      <NavLink to = "/home">
                Home
      </NavLink>
      
      <div>
        <h2>Create</h2>
    </div>
    <main>
      <form onSubmit={handleOnSubmit}>
    
    <div className='field'>
      <label>Name</label>
      <input
      type={"text"}
      placeholder={"name"}
      name={"name"}
      value={form.name}
      onChange={handleOnchangeActivity}
      />
      {validate.name && <p style={styles}>{validate.name}</p>}
    </div>

    <div className='field'>
      <label>Difficulty</label>
      <input 
      type={"number"}
      min="1" 
      max="5"
      placeholder={"difficulty"}
      name={"difficulty"}
      value={form.difficulty}
      onChange={handleOnchangeActivity}
      />
      {validate.difficulty && <p style={styles}>{validate.difficulty}</p>}
    </div>

    <div className='field'>
      <label>Duration</label>
      <input 
      type={"number"}
      min="1" 
      max="8"
      placeholder={"duration"}
      name={"duration"}
      value={form.duration}
      onChange={handleOnchangeActivity}
      />
      {validate.duration && <p style={styles}>{validate.duration}</p>}
    </div>

    <div className='field'>
    <label>Season</label>
    <select name={"season"} onChange={handleSelectSeason}>
      <option value={""} selected disabled>-- Select season --</option>
      <option value={"summer"}>Summer</option>
      <option value={"autumn"}>Autumn</option>
      <option value={"winter"}>Winter</option>
      <option value={"spring"}>Spring</option>
      <option value={"fall"}>Fall</option>
    </select>
    </div>

    <div className='field'>
      <label>Countries</label>
      <select name={"countries"} onChange={(e) => handleSelectCountries(e)}>
        <option value={""} selected disabled>-- Select countries --</option>
        {
        allCountries.map(coun => (
        <option key={coun.id} value={coun.name}>{coun.name}</option>
        ))
        }
        </select>
        <ul>
          <li>{form.countries.map(el => el + ", ")}</li>
        </ul>
        </div>
        <div className='submit'>
          <button 
          type={"submit"}
          disabled = {error}
          >Create</button>
        </div>
      </form>
      <div>
        {
          form.countries.map(d => 
            <div>
              <p>{d}</p>
              <button onClick={() => handleDeleteCountries(d)}>X</button>
            </div>
            )
        }
      </div>
    </main>
    </div>
  )
}

export default Form;


      
      

      

      