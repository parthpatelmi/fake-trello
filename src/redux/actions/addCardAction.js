import {ADD_CARD, SET_LOADING} from "../types";

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};


//ADD_CARD
export const addLog = (data) => async (dispatch) => {
    try {
        setLoading();
        dispatch({
            type: ADD_CARD,
            payload: data,
        });
    } catch (error) {
        console.log("error => ", error)
    }
};