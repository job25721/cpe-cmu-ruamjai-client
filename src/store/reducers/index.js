import { combineReducers } from "redux";
import counterReducer from "./counter";
import petitionReducer from "./petition";
export default combineReducers({
  counter: counterReducer,
  petition: petitionReducer,
});
