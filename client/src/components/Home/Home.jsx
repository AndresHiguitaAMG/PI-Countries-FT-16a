import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivities, FilterByContinent, getAllCountries } from '../../redux/action';
import Cards from '../Cards/Cards';
import OrderByName from '../Ordinances/OrderByName';
import OrderByPopulation from '../Ordinances/OrderByPopulation';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';
import './Home.modules.css';

const Home = () => {
    const dispatch = useDispatch();
    const { allCountries } = useSelector(state => state);
    console.log(allCountries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);
    const indexLastCountries = currentPage * countriesPerPage;
    const indexFirstCountries = indexLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountries, indexLastCountries);
    
    

    useEffect (() => {
        dispatch(getAllCountries());
        // dispatch(filterByActivities())
    }, [dispatch]);

    const totalPages = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSelectContinent = (e) => {
            dispatch(FilterByContinent(e.target.value));
          }

    const handleSelectActivity = (e) => {
        dispatch(filterByActivities(e.target.value))
    }      

    return (
        <div className="home-order">

            <div>
                <SearchBar />
            </div>

            <div>
                <OrderByName />
            </div>

            <div>
                <OrderByPopulation />
            </div>

            <div>
                <select onChange={handleSelectActivity}>
                    <option value={""}>select</option>
                    {allCountries &&
                        allCountries.map(a => (
                            a.activities.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                        ))
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
                    currentCountries?.length > 0 
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