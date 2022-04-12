import {
    GET_ALL_COUNTRIES, GET_BY_NAME, GET_COUNTRIES_BY_ID, POST_ACTIVITIES, ORDER_BY_NAME,
    SET_PAGE,
    SET_ORDER,
    ORDER_BY_POPULATION,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITIES,
    // SET_FILTER,
    // SET_FILTER,
    // SET_RESET
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: [],
    detail: [],
    // activities: [],
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
                detail: action.payload
            }

        case POST_ACTIVITIES:
            return {
                ...state
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

        case FILTER_BY_CONTINENT:
            const countries = state.countries;
            const change = action.payload === "All" ? countries : countries.filter(con => con.continent === action.payload)
            return {
                ...state,
                allCountries: change
            }
            
        case FILTER_BY_ACTIVITIES:
            const countriesAll = state.countries;
            const filterActivities = countriesAll.reduce((acomulador, actual) => {
                let activityId = actual.activities.map(i => i.id);
                if (activityId.includes(parseInt(action.payload))) {
                    acomulador.push(actual);
                }
                return acomulador;
            }, []);
            return {
                ...state,
                allCountries: filterActivities
            }
            
        // case SET_FILTER:
        //     const filterA = state.activities;
        //     const filterB = filterA.reduce((acomulador, actual ) => {
        //         let activId = actual.a
        //     }) 
        //     return {
        //         ...state,
        //         allCountries: action.payload
        //     }    

        default:
            return state;
    }
}