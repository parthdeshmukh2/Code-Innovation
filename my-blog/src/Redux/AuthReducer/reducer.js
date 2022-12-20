import * as types from "./actionTypes";

const initialState = {
  user: "",
  token: "",
  isAuth: false,
  isLoding: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case types.GET_LOGIN_REQUEST:
      return { ...state, isLoding: true, isError: false };

    case types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoding: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.userLogin.userName,
      };

    case types.GET_LOGIN_FAILURE:
      return { ...state, isLoding: false, isError: true, isAuth: false };
    default:
      return state;
  }
};
