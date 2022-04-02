import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';

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
    };
}; 

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const byName = await axios.get("http://localhost:3001/countries?name=" + name);
            return dispatch ({
                type: GET_BY_NAME,
                payload: byName.data
            })
        } catch (error) {
            console.log(error);
        }
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
