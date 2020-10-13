import api from "../../api";
import { petitionActionTypes } from "../reducers/petition";

export function getVotableAllPetition() {
  return async (dispatch) => {
    let res = [];
    try {
      res = (await api.get("/petitions")).data;
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: petitionActionTypes.getAllPetition,
      payload: res.data.result,
    });
  };
}

export function getMyPetition(uid) {
  return async dispatch => {
    let res = []
    try {
      res = (await api.post("/petitions" , {
        userId : uid
      })).data;
      console.log(res.data);
    }catch (err) {
      console.log(err);
    }
    dispatch({
      type: petitionActionTypes.getMyPetition,
      payload: res.data.res
    })
  }
}