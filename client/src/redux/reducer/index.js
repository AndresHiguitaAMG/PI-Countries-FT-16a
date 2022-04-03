import {
    GET_ALL_COUNTRIES, GET_BY_NAME, GET_COUNTRIES_BY_ID, POST_ACTIVITIES, ORDER_BY_NAME,
    SET_PAGE,
    SET_ORDER,
    ORDER_BY_POPULATION,
    // SET_RESET
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
    page: 1,
    order: "",
    // resetName: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }

        case GET_BY_NAME:
                return{
                    ...state,
                    allCountries: action.payload
                }    

        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countries: action.payload
            }

        case POST_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
          
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            }

        // case SET_RESET:
        //     return {
        //         ...state,
        //         resetName: action.payload
        //     }    
        
        case ORDER_BY_NAME:
            let orderAAndZ = action.payload === "asc" ?
            state.allCountries.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                else if (b.name > a.name) {
                    return - 1;
                }
                return 0;
            })
            :
            state.allCountries.sort((a, b) => {
                if (a.name > b.name) {
                    return - 1;
                }
                else if (b.name > a.name) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                allCountries: orderAAndZ
            }
            
        case ORDER_BY_POPULATION:
            let orderPopulation = action.payload === "asc" ?
            state.allCountries.sort((a, b) => {
                if (a.population > b.population) {
                    return 1;
                }
                else if (b.population > a.population) {
                    return - 1;
                }
                return 0;
            })
            :
            state.allCountries.sort((a, b) => {
                if (a.population > b.population) {
                    return - 1;
                }
                else if (b.population > a.population) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                allCountries: orderPopulation
            }

        default:
            return state;
    }
}