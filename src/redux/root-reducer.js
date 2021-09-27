import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers({
  allUsersData: userReducers,
});

export default rootReducer;
