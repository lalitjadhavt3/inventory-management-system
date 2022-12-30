import { ADD_USER } from "../ActionTypes";

export const addUser = (user) => (dispatch) => {
  console.log("in Action", user);
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};
