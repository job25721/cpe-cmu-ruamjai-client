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
