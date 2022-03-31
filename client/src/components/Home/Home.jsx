import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/action';
import Cards from '../Cards/Cards';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    // console.log(allCountries);

    useEffect (() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    return (
        <div>
            <div>
                {
                    allCountries?.length > 0 ?
                    allCountries?.map(co => {
                        return <Cards flag={co.flag} name={co.name} continent={co.continent} key={co.id}/>
                    })
                    :
                    <div>Loading...</div> 
                }
            </div>
        </div>
    );
}
 
export default Home;