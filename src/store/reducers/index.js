import { combineReducers } from "redux";
import counterReducer from "./counter";
import petitionReducer from "./petition";
import userReducer from './user' 
export default combineReducers({
  counter: counterReducer,
  petition: petitionReducer,
  user : userReducer,
});
