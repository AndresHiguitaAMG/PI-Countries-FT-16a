import {
    GET_ALL_COUNTRIES, GET_BY_NAME, GET_COUNTRIES_BY_ID
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: [],
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
        default:
            return state;
    }
}