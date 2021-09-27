import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
