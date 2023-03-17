import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

//for every store to work we need reducers, these reducers are what actually allows us to actually
//form the state object

//root-reducer: it is the combination of all our reducers

//root-reducer
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleware is a helper that run before an action hits the reducer and they log out the state
// i.e action will hit middleware first

//filter(Boolean): It filters out anything where it is not true

const middleWares = [process.env.NODE_ENV !== "development" && logger].filter(
  Boolean
);

//compose is a functional programming pattern and it is essentially a way to pass multiple functions
//left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
