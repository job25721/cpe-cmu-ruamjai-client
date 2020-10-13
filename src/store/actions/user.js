import api from "../../api";
import { userType } from "../reducers/user";

export const login = (username, password) => async (dispatch) => {
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
  } catch (error) {
    console.log(error);
  }
};
