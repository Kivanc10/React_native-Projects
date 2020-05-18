import {
  SELECT_BOOK,
  DESELECT_BOOK
} from "../actions";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
      case SELECT_BOOK:
        return action.payload
      case DESELECT_BOOK:
        return {}
      default:
        return state;
    }
}
