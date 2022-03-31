import {
    GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ID
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                coutries: action.payload
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