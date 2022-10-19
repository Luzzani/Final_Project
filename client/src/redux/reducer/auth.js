import {
  LOGIN_USER_FIREBASE,
  LOGOUT_USER_FIREBASE,
  PLAYER__FORM__FIREBASE,
  ALL_PLAYER__FORM__FIREBASE,
} from "../actions/actions";

const initialState = {
  email: "",
  nickName: "",
  userInfoFirestore: "",
  allUserFirestore: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_FIREBASE:
      return {
        ...state,
        email: action.payload.email,
        nickName: action.payload.nickName,
      };

    case LOGOUT_USER_FIREBASE:
      return initialState;

    case PLAYER__FORM__FIREBASE:
      return {
        ...state,
        userInfoFirestore: action.payload,
      };

    case ALL_PLAYER__FORM__FIREBASE:
      return {
        ...state,
        allUserFirestore: action.payload,
      };

    default:
      return state;
  }
}
