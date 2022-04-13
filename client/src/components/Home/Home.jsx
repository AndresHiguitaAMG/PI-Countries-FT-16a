import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivities, FilterByContinent, getAllCountries, orderByArea } from '../../redux/action';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import OrderByName from '../Ordinances/OrderByName';
import OrderByPopulation from '../Ordinances/OrderByPopulation';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';
import './Home.modules.css';

const Home = () => {
    const dispatch = useDispatch();
    const { allCountries, activities } = useSelector(state => state);
    console.log(allCountries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);
    const indexLastCountries = currentPage * countriesPerPage;
    const indexFirstCountries = indexLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountries, indexLastCountries);

    const activtyNoRepeat = activities.reduce((ac, act) => {
        if (!ac.includes(act.name)) {
            ac.push(act);
        }
        return ac;
    }, []) 
    
    

    useEffect (() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const totalPages = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleOnClickReset = (e) => {
        e.preventDefault();
        dispatch(getAllCountries());
    }

    const handleSelectContinent = (e) => {
            dispatch(FilterByContinent(e.target.value));
          }

    const handleSelectActivity = (e) => {
        dispatch(filterByActivities(e.target.value))
    }
    
    const handleSelectArea = (e) => {
        dispatch(orderByArea(e.target.value))
    }

    return (
        <div className="home-order">

            <div>
                <NavBar />
            </div>

            <div>
                <SearchBar />
            </div>

            <div>
                <button onClick={handleOnClickReset}>Reset</button>
            </div>

            <div>
                <OrderByName />
            </div>

            <div>
                <select onChange={handleSelectArea}>
                    <option value={"asc"}>Mayor</option>
                    <option value={"desc"}>Menor</option>
                </select>
            </div>

            <div>
                <OrderByPopulation />
            </div>

            <div>
                <select onChange={handleSelectActivity}>
                    <option selected disabled value={""}>-- Filter By Activities </option>
                    {activtyNoRepeat &&
                        activtyNoRepeat.map(a => (
                            <option key={a.id} value={a.id}>{a.name}</option>
                        ))
                    }
                </select>
            </div>

            <div>
        <span>Filter By Continent: </span>
        <select onChange={handleSelectContinent}>
            <option value={"All"}>-- All --</option>
            <option value={"Europe"}>-- Europe --</option>
            <option value={"Asia"}>-- Asia --</option>
            <option value={"Oceania"}>-- Oceania --</option>
            <option value={"Africa"}>-- Africa --</option> 
            <option value={"Antarctic"}>-- Antarctic --</option> 
            <option value={"Americas"}>-- Americas --</option> 
        </select>
    </div>
            
            <div div className="cards-container">
                {
                    currentCountries?.length 
                    ?
                    currentCountries?.map(co => {
                        return <Cards flag={co.flag} name={co.name} continent={co.continent} id={co.id} key={co.id}/>
                    })
                    :
                    <div>Loading...</div> 
                }
            </div>
            
            <div>
                <Paged
                countriesPerPage = {countriesPerPage}
                allCountries = {allCountries.length}
                totalPages = {totalPages}
                />
            </div>
        </div>
    );
}
 
export default Home;