import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SET_NAME = 'SET_NAME';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';

export const getAllCountries = (name) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries?name=${name ? name: ""}`)
        .then(informationBack => {
            return dispatch ({
                type: GET_ALL_COUNTRIES,
                payload: informationBack.data
            });
        })
        .catch ((error) => {
            console.log(error);
        });
    };
}; 

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}

export const getCountriesById = (id) => {
    return async function (dispatch) {
        try {
            const detailAPI = await axios.get(`http://localhost:3001/countries/${id}`)
            console.log(detailAPI);
            return dispatch ({
                type: GET_COUNTRIES_BY_ID,
                payload: detailAPI.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
