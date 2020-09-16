import store from "..";
import { counterActionTypes } from "../reducers/counter";

export function addCounter() {
  return (dispatch) => {
    dispatch({
      type: counterActionTypes.ADD_COUNTER,
    });
  };
}

export function decreseCounter() {
  return (dispatch) => {
    if (store.getState().counter.counter !== 0) {
      dispatch({
        type: counterActionTypes.DECRESE_COUNTER,
      });
    }
  };
}
