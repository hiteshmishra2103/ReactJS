import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

//reducer in redux receives every single action that gets dispactched ever and also we need to return
//the default statement, this is the thing you need to know when migrating your existing reducers over
//from context into redux

//Key Note: action pass to every single reducer, that means every single reducer by default needs to
//return previous state, if none of the cases match to the type
export const UserReducer = (state = INITIAL_STATE, action) => {
//   console.log("dispatched");
  console.log(action);

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
