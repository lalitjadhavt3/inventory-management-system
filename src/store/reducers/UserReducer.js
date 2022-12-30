import { ADD_USER } from "../ActionTypes";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("in reducer", action);
      return {
        ...state,
        users: [...state.users].push(action.payload),
      };
    default:
      return state;
  }
};
