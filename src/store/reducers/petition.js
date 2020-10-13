const initialState = {
  allPetitions: [],
  filterdPetitions: [],
  newPetiton: {
    type: "",
    detail: {
      topic: "Hello",
      description: "main des",
    },
    subDetail: [
      {
        topic: "123",
        description: "456",
      },
    ],
  },
  myPetitions: [],
};

export class petitionActionTypes {}
petitionActionTypes.getAllPetition = "GET_ALL_PETITIONS";
petitionActionTypes.getMyPetition = "GET_MY_PETITIONS";

petitionActionTypes.addSubDetail = "ADD_SUB_DETAIL";
petitionActionTypes.setMainTopic = "SET_TOPIC";
petitionActionTypes.setMainDescription = "SET_DES";
petitionActionTypes.setSubDetail = "SET_SUB";

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
    case petitionActionTypes.addSubDetail:
      return {
        ...state,
        newPetiton: {
          ...state.newPetiton,
          subDetail: [
            ...state.newPetiton.subDetail,
            { topic: "", description: "" },
          ],
        },
      };
    case petitionActionTypes.setMainTopic:
      return {
        ...state,
        newPetiton: {
          ...state.newPetiton,
          detail: { ...state.newPetiton.detail, topic: action.payload },
        },
      };
    case petitionActionTypes.setMainDescription:
      return {
        ...state,
        newPetiton: {
          ...state.newPetiton,
          detail: { ...state.newPetiton.detail, description: action.payload },
        },
      };
    case petitionActionTypes.setSubDetail:
      return {
        ...state,
        newPetiton: {
          ...state.newPetiton,
          subDetail: action.payload,
        },
      };
    default:
      return state;
  }
}
