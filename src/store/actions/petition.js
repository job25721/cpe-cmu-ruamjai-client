import store from "..";
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
  return async (dispatch) => {
    let res = [];
    try {
      res = (await api.get("/user/myPetitions")).data;
      console.log(res.data.petitions);
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: petitionActionTypes.getMyPetition,
      payload: res.data.petitions,
    });
    dispatch({
      type: petitionActionTypes.SET_CERRENT_PETITION,
      payload: res.data.petitions.waiting_for_voting
    })
  };
}

export function onSubDetailTopicChange(idx, topic) {
  let subDetail = store.getState().petition.newPetiton.subDetail;
  subDetail[idx].topic = topic;
  return (dispatch) => {
    dispatch({ type: petitionActionTypes.setSubDetail, payload: subDetail });
  };
}

export function onSubDetailDescriptionChange(idx, des) {
  let subDetail = store.getState().petition.newPetiton.subDetail;
  subDetail[idx].description = des;
  return (dispatch) => {
    dispatch({ type: petitionActionTypes.setSubDetail, payload: subDetail });
  };
}

export const getDetail = async (petitionId) => {
  let res = []
  try {
    res = (await api.get(
      `petitions/${petitionId}`
    )).data
  } catch (err) {
    console.log(err);
  }
  console.log(res.data.result);
  return res.data.result

}

export const Loading = () => dispatch => {
  dispatch({
    type: petitionActionTypes.LOADING
  })
}

export const Loaded = () => dispatch => {
  dispatch({
    type: petitionActionTypes.LOADED
  })
}

export const setCurrentPetition = (petition) => async dispatch => {
  dispatch({
    type: petitionActionTypes.SET_CERRENT_PETITION,
    payload: petition
  })
}

export const getWaitingPetition = () => async dispatch => {

  try {
    const res = await api.get('/user/petitionApprove')
   
    dispatch({
      type: petitionActionTypes.SET_ADMIN_PETITION,
      payload: res.data.data.result
    })
  } catch (err) {
    console.log(err);
  }
}