import * as types from "./actionTypes";

const initialState = {
    blogs:[],
    isLoading:false,
    isError:false,
}


export const reducer = (state = initialState, action) => {
    const {payload, type} = action;

    switch(type){
        default: return state;
    }
}