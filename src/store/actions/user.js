import store from "..";
import api from "../../api";
import { userType } from "../reducers/user";

export const login = (username, password, props) => async (dispatch) => {
  try {
    const res = (
      await api.post("/user/login", {
        username: username,
        password: password,
      })
    ).data;
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: userType.SET_USER,
      payload: res.data.USER,
    });
    props.history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export function addNewPetition() {
  return async (dispatch) => {
    let {
      detail: { topic, description },
    } = store.getState().petition.newPetiton;
    if (topic === "" || description === "") {
      alert("กรอกให้ครบ");
    } else {
      try {
        await api.post("/user/add", {
          ...store.getState().petition.newPetiton,
        });
        alert("added");
      } catch (err) {
        console.log(err);
      }
    }
  };
}
