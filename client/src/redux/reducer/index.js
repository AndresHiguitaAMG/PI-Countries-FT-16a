import {
    GET_ALL_COUNTRIES, SET_NAME, GET_COUNTRIES_BY_ID
} from '../action/index';

const initialState = {
    allCountries: [],
    countries: [],
    name: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }

        case SET_NAME:
                return{
                    ...state,
                    name: action.payload
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