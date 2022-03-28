import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/countries")
        .then(informationBack => {
            return dispatch ({
                type: GET_ALL_COUNTRIES,
                payload: informationBack.data
            });
        })
        .catch ((error) => {
            console.log(error);
        });
    }
}
