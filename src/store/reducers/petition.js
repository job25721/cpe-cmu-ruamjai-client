const initialState = {
  allPetitions: [],
  filterdPetitions: [],
};

export class petitionActionTypes {}
petitionActionTypes.getAllPetition = "GET_ALL_PETITIONS";

export default function petitionReducer(state = initialState, action) {
  switch (action.type) {
    case petitionActionTypes.getAllPetition:
      return {
        ...state,
        allPetitions: action.payload,
      };
    default:
      return state;
  }
}
