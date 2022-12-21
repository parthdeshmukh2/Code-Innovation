import * as types from "./actionTypes";
import axios from "axios";

export const GetBlogData = (token) => (dispatch) => {
  dispatch({ type: types.GET_BLOG_DATA_REQUEST });

  axios
    .get("http://localhost:8080/blog/", {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) =>
      dispatch({ type: types.GET_BLOG_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_BLOG_DATA_FAILURE, payload: err })
    );
};

export const PostBlogData = (body, token) => (dispatch) => {
  dispatch({ type: types.POST_BLOG_DATA_REQUEST });

  axios
    .post("http://localhost:8080/blog/post", body, {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: types.POST_BLOG_DATA_SUCCESS });
      alert("Your Blog Posted Successfully");
    })
    .catch((err) => {
      dispatch({ type: types.POST_BLOG_DATA_FAILURE });
      alert("Something Went Wrong");
    });
};

export const DeleteBlogData = (id, token) => (dispatch) => {
  dispatch({ type: types.DELETE_BLOG_DATA_REQUEST });

  axios
    .delete(`http://localhost:8080/blog/delete/${id}`, {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: types.DELETE_BLOG_DATA_SUCCESS });
      alert("Blog Deleted Successfully");
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_BLOG_DATA_FAILURE });
      alert("Something Went Wrong");
    });
};

export const UpdateBlogData = (body, token) => (dispatch) => {
  dispatch({ type: types.UPDATE_BLOG_DATA_REQUEST });

  axios
    .patch(`http://localhost:8080/blog/edit/${body._id}`,body, {
      headers: {
        token: "Bearer " + token,
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: types.UPDATE_BLOG_DATA_SUCCESS });
      alert("Blog Updated Successfully");
    })
    .catch((err) => dispatch({ type: types.UPDATE_BLOG_DATA_FAILURE }));
};
