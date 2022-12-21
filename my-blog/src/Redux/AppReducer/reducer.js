import * as types from "./actionTypes";

const initialState = {
    blogs:[],
    isLoading:false,
    isError:false,
}


export const reducer = (state = initialState, action) => {
    const {payload, type} = action;

    switch(type){

        case types.GET_BLOG_DATA_REQUEST :
            return {...state, isLoading:true, isError:false}

            case types.GET_BLOG_DATA_SUCCESS :
                return {...state, isLoading:false, isError:false, blogs:payload }

                case types.GET_BLOG_DATA_FAILURE :
                    return {...state, isLoading:false, isError:true}
        default: return state;
    }
}