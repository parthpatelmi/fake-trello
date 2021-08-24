import {ADD_CARD, GET_CARD} from "../types";


const initialState = {
    title: ""
};


export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARD:
            return {
                ...state,
                logs: action.payload,
                loading: false,
            };
        case ADD_CARD:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false,
            };
        default:
            return state;
    }
};
