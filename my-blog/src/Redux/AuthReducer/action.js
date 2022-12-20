import axios from "axios";

import * as types from "./actionTypes";

//Function for User Login

export const userLogin = (body, navigate) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });

  axios
    .post("http://localhost:8080/user/login", body)
    .then((res) => {
      dispatch({ type: types.GET_LOGIN_SUCCESS, payload: res.data });
      alert("Login SuccessFull");
      navigate("/");
    })
    .catch((err) => {
      dispatch({ type: types.GET_LOGIN_FAILURE });
      console.log(err);
    });
};

//Function For User Registration.
export const registerUser = (body, navigate) => (dispatch) => {
  console.log(body);
  dispatch({ type: types.GET_REGISTER_REQUEST });

  axios
    .post("http://localhost:8080/user/register", body)
    .then((res) => {
      dispatch({ type: types.GET_REGISTER_SUCCESS, payload: res.data });
      alert("Registered Successfully");
      navigate("/login");
    })
    .catch((err) => {
      dispatch({ type: types.GET_REGISTER_FAILURE });
      console.log(err);
    });
};
