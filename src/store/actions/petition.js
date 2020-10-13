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

export function getMyPetition() {
  return async dispatch => {
    let res = []
    const token = localStorage.getItem('token')
    try {
      res = (await api.post("/user/myPetitions" ,{headers:{'Authorization': token}})).data;
      console.log(res.data.petitions);
    }catch (err) {
      console.log(err);
    }
    dispatch({
      type: petitionActionTypes.getMyPetition,
      payload: res.data.petitions
    })
  }
}

export const getDetail = async (petitionId) =>{
  let res = []
  try {
    res = (await api.get(
      `petitions/${petitionId}`
    )).data
  }catch(err){
    console.log(err);
  }
  console.log(res.data.result);
  return res.data.result

}