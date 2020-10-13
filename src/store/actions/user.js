import api from "../../api";
import {userType} from '../reducers/user'

export const setUser = ( user ) => dispatch => {
    dispatch({
        type: userType.SET_USER,
        payload : user
    })
}
