import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const SET_PAGE = 'SET_PAGE';
export const SET_ORDER = 'SET_ORDER';
// export const SET_RESET = 'SET_RESET';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';



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
            const byName = await axios.get(`http://localhost:3001/countries?name=${name}`);
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

export const postActivities = (payload) => {
    return async function (dispatch) {
        const inputUser = await axios.post("http://localhost:3001/countries/create", payload);
        return dispatch ({
            type: POST_ACTIVITIES,
            inputUser
        });
    };
};

export const setPage = (payload) => {
    return {
        type: SET_PAGE,
        payload
    }
}

export const setOrder = (payload) => {
    return {
        type: SET_ORDER,
        payload
    }
}

export const orderByName = (name) => {
    return {
        type: ORDER_BY_NAME,
        payload: name
    }
}

export const orderByPopulation = (population) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: population
    };
};

export const FilterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
} 

// export const setReset = () => {
//     return {
//         type: SET_RESET,
//         payload: {}
//     }
// }
