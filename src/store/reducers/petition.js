const initialState = {
  allPetitions: [],
  filterdPetitions: [],
  newPetiton: {
    type: "",
    deatil: {
      topic: "",
      description: "",
    },
    subDetail: [
      {
        topic: "",
        description: "",
      },
    ],
  },
  myPetitions: [],
};

export class petitionActionTypes {}
petitionActionTypes.getAllPetition = "GET_ALL_PETITIONS";
petitionActionTypes.getMyPetition = "GET_MY_PETITIONS";

export default function petitionReducer(state = initialState, action) {
  switch (action.type) {
    case petitionActionTypes.getAllPetition:
      return {
        ...state,
        allPetitions: action.payload,
      };
    case petitionActionTypes.getMyPetition:
      return {
        ...state,
        myPetitions: action.payload,
      };
    default:
      return state;
  }
}
