import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import authReducer from '../reducer/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const persistor = persistStore(store);


// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "../reducer/auth";
// // import rootReducer from "../reducer/index";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);
// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// const persistor = persistStore(store);
