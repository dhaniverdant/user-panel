import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const removeUser = () => ({
  type: types.DELETE_USER,
});

const createUser = () => ({
  type: types.ADD_USER,
});

const updateUser = () => ({
  type: types.UPDATE_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
        // console.log("resp", resp);
        dispatch(getUsers(resp.data));
      }).catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
      // console.log("resp", resp);
      dispatch(removeUser());
      dispatch(loadUsers());
    }).catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios.post(`${process.env.REACT_APP_API}`, user).then((resp) => {
      // console.log("resp", resp);
      dispatch(createUser());
      dispatch(loadUsers());
    }).catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
      // console.log("resp", resp);
      dispatch(getUser(resp.data));
    }).catch((error) => console.log(error));
  };
};

export const editUser = (user, id) => {
  return function (dispatch) {
    axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((resp) => {
      // console.log("resp", resp);
      dispatch(updateUser());
    }).catch((error) => console.log(error));
  };
};
