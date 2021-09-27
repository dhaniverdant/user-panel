import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const removeUser = () => ({
  type: types.DELETE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      }).catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
      console.log("resp", resp);
      dispatch(removeUser());
      dispatch(loadUsers());
    }).catch((error) => console.log(error));
  };
};
