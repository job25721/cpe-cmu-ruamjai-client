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

export function getMyPetition(uid) {
  return async (dispatch) => {
    let res = [];
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBldGl0aW9ucyI6WyI1Zjc2ZmI0YTU0NjFkNTc0NjQ3MTBiMGQiLCI1Zjc4MWY4ODJjMzBkZDE4YTRkZWFmNjUiXSwiX2lkIjoiNWY3MzJiZTMyMDE4YjQyYTg5MDg1MWUxIiwiZmlyc3ROYW1lIjoi4Lib4Lij4Li04LiN4LiN4LiyIiwibGFzdE5hbWUiOiLguKrguLXguJXguLDguKfguLHguJkiLCJyb2xlIjoic3R1ZGVudCIsImNvZGUiOiI2MDA2MTA3NDkiLCJ1c2VybmFtZSI6InBhcmlueWEiLCJwYXNzd29yZCI6IjEyMzQiLCJfX3YiOjF9LCJpYXQiOjE2MDI1NzY3MzEsImV4cCI6MTYwMzE4MTUzMX0.-mbFuaJEZiC86FhBgUFORYU7xf8luNgr_BouPm2ogZg";
    try {
      res = (
        await api.post(
          "/user/myPetitions",
          {
            userId: uid,
          },
          { headers: { Authorization: token } }
        )
      ).data;
      console.log(res.data.petitions);
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: petitionActionTypes.getMyPetition,
      payload: res.data.petitions,
    });
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
