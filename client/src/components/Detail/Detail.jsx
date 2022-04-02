import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import useHistory from 'react-router-dom';
import { getCountriesById } from '../../redux/action';

const Detail = (props) => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const countries = useSelector(state => state.countries);
    console.log(countries);
    const { id } = props.match.params;

    useEffect (() => {
        dispatch(getCountriesById(id));
    }, [dispatch, id]);

    // const handleGoToBack = () => {
    //     history.goBack();
    // }

    return (
        <div>
            {/* <button onClick={handleGoToBack}>To return◀</button> */}

            {/* {
                countries.name ?
                <div className= "container-detail">
                    <div className = "tarjeta">
                        <div className = "tarjeta-image">
                            <img src={countries.flag} alt="img not found" width="400px" heigth="290px"/>
                        </div>
                        
                        <div tajeta-text>
                            <h3>{countries.name}</h3>
                        
                        
                        
                            <p>Genres: {countries.continent}</p>
                    
                            
                        </div>
                        
                    </div>  
                </div>

                :

                <div>Loading</div>
            } */}
            <h1>Hola</h1>
        </div>
    );
}
 
export default Detail;