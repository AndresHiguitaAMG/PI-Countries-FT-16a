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
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';
// export const SET_FILTER = 'SET_FILTER';
export const ORDER_BY_AREA = 'ORDER_BY_AREA';


export const getAllCountries = () => {
    return async function (dispatch) {
        try {
            const informationBack = await axios.get("http://localhost:3001/countries");
            console.log(informationBack);
            const informationActivity = await axios.get("http://localhost:3001/activities");
            console.log(informationActivity);

            return dispatch ({
                type: GET_ALL_COUNTRIES,
                payload: [informationBack.data, informationActivity.data]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

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

export const getCountriesById  = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(detailAPI => {
            return dispatch ({
                type: GET_COUNTRIES_BY_ID,
                payload: detailAPI.data
            });
        })
        .catch ((error) => {
            console.log(error);
        });
    };
}; 

// export const getCountriesById = (id) => {
//     return async function (dispatch) {
//         try {
//             const detailAPI = await axios.get(`http://localhost:3001/countries/${id}`)
//             console.log(detailAPI.data);
//             return dispatch ({
//                 type: GET_COUNTRIES_BY_ID,
//                 payload: detailAPI.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

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

export const filterByActivities = (filterActivity) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: filterActivity
    }
}

//Action para ponerla en funcionamiento mas adelante junto con setFilter
// export const filterByActivities = () => {
//     return async function (dispatch) {
//         try {
//             const filterActivities = await axios.get("http://localhost:3001/activities");
//             console.log(filterActivities.data);
//             return dispatch ({
//                 type: FILTER_BY_ACTIVITIES,
//                 payload: filterActivities.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const setFilter = (payload) => {
//     return {
//         type: SET_FILTER,
//         payload
//     }
// }

// export const setReset = () => {
//     return {
//         type: SET_RESET,
//         payload: {}
//     }
// }

export const orderByArea = (orderArea) => {
    return {
        type: ORDER_BY_AREA,
        payload: orderArea
    }
}
