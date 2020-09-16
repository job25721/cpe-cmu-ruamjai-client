const initialState = {
  counter: 0,
};

export class counterActionTypes {}
counterActionTypes.ADD_COUNTER = "ADD_COUNTER";
counterActionTypes.DECRESE_COUNTER = "DECRESE_COUNTER";

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case counterActionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case counterActionTypes.DECRESE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
