import { compse, createStore, applyMiddleware, compose } from "redux";

import logger from "redux-logger";

//for every store to work we need reducers, these reducers are what actually allows us to actually
//form the state object

//root-reducer: it is the combination of all our reducers

//root-reducer
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  //if there is no types on actions on them
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

//middleware is a helper that run before an action hits the reducer and they log out the state
// i.e action will hit middleware first
const middleWares = [logger];

//compose is a functional programming pattern and it is essentially a way to pass multiple functions
//left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
