import {
    GET_ALL_COUNTRIES, GET_BY_NAME, GET_COUNTRIES_BY_ID, POST_ACTIVITIES, SET_ORDER
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
    order: ""
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
            
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            }    
        default:
            return state;
    }
}