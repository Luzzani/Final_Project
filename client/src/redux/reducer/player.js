import { CREATE_PLAYER } from "../actions/actions";

const initialState = {
  players: [],
};

export default function playerReducer(state = initialState, action) {
    switch(action.type){
        case CREATE_PLAYER:
            return { players: []}
        default:
            return state

    }

}
