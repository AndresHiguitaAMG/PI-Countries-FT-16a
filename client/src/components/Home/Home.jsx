import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/action';
import Cards from '../Cards/Cards';
import OrderByName from '../Ordinances/OrderByName';
import OrderByPopulation from '../Ordinances/OrderByPopulation';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    const dispatch = useDispatch();
    const { allCountries } = useSelector(state => state);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);
    const indexLastCountries = currentPage * countriesPerPage;
    const indexFirstCountries = indexLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountries, indexLastCountries);

    useEffect (() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const totalPages = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>

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