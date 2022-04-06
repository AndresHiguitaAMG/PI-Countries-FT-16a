import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
import { getAllCountries, postActivities } from '../../redux/action';

const Form = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const { allCountries } = useSelector(state => state);
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

    const handleOnchangeActivity = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };

    const handleSelectCountries = (e) => {
    //   if (form.AllCountries.includes(e.target.value)) {
    //     alert("You already select that country.")
    // } else {
        
    
      // const selectCountries = form.countries.find(el => el === e.target.value)
      // if (selectCountries) return
      setForm({
          ...form, 
          countries: [...form.countries, e.target.value]
      }) 
  }

  // const handleSelectSeason = (e) => {
  //   const selectSeason = form.season.find(el => el === e.target.value)
  //     if (selectSeason)
  //     return
  //   setForm({
  //     ...form,
  //     season: [...form.season, e.target.value]
  //   })
  // }

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
    })
    // history.push('/home')
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
      <div>
        <h1>Create</h1>
    </div>
    
    <div>
      <label>Name: </label>
      <input
      type={"text"}
      placeholder={"name"}
      name={"name"}
      value={form.name}
      onChange={handleOnchangeActivity}
      />
    </div>

    <div>
      <label>Difficulty: </label>
      <input 
      type={"number"}
      min="1" 
      max="5"
      placeholder={"difficulty"}
      name={"difficulty"}
      value={form.difficulty}
      onChange={handleOnchangeActivity}
      />
    </div>

    <div>
      <label>Duration: </label>
      <input 
      type={"number"}
      min="1" 
      max="8"
      placeholder={"duration"}
      name={"duration"}
      value={form.duration}
      onChange={handleOnchangeActivity}
      />
    </div>

    <div>
    {/* <label>Season: </label> */}
    <select onChange={handleOnchangeActivity}>
      <option value={""}>-- Select season --</option>
      <option value={"summer"}>Summer</option>
      <option value={"autumn"}>Autumn</option>
      <option value={"winter"}>Winter</option>
      <option value={"spring"}>Spring</option>
      <option value={"fall"}>Fall</option>
    </select>
    {/* <ul>
      <li>{form.season.map(el => el + ", ")}</li>
    </ul> */}
    </div>

    <div>
      {/* <label>Countries: </label> */}
      <select onChange={(e) => handleSelectCountries(e)}>
        <option value={""}>-- Select countries --</option>
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
        <div>
          <button 
          type='submit'
          >Create</button>
        </div>
      </form>
    </div>
  )
}

export default Form;


      
      

      

      