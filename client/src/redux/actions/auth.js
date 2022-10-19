import {
  LOGIN_USER_FIREBASE,
  LOGOUT_USER_FIREBASE,
  PLAYER__FORM__FIREBASE,
  ALL_PLAYER__FORM__FIREBASE,
} from "./actions";

import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, firestore } from "../../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const login = (email, nickName) => ({
  type: LOGIN_USER_FIREBASE,
  payload: { email, nickName },
});

export const logout = () => {
  signOut(auth);
  return {
    type: LOGOUT_USER_FIREBASE,
  };
};

export const loginWhitEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
  return { type: LOGIN_USER_FIREBASE, payload: { email, nickName: null } };
};

export const registerWhitEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
  return { type: LOGIN_USER_FIREBASE, payload: { email, nickName: "" } };
};

export function getUserFirestore(uid) {
  return (dispatch) => {
    try {
      const docuRef = doc(firestore, `usuarios/${uid}`);
      getDoc(docuRef).then((consult) => {
        if (consult.exists()) {
          const infoDocu = consult.data();
          return dispatch({
            type: PLAYER__FORM__FIREBASE,
            payload: { ...infoDocu, uid: "private" },
          });
        } else {
          return dispatch({
            type: PLAYER__FORM__FIREBASE,
            payload: null,
          });
        }
      });
    } catch (error) {
      console.log("Failed to retrieve data from database", error);
    }
  };
}

export const getAllInfoUsers = (docs) => {
  return { type: ALL_PLAYER__FORM__FIREBASE, payload: docs };
};


//action envie al back
