import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({ AppReducer, AuthReducer });

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
