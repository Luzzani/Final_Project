import { CREATE_PLAYER } from "./actions";
import axios from "axios";

export const createPlayer = (personalInfo) => {
  return async (dispatch) => {
    await axios.post(`${axios.defaults.baseURL}/players/create`, personalInfo);
    dispatch({ type: CREATE_PLAYER });
  };
};
