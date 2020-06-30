const INITIAL_STATE = {
  rates : []
}

import {
  GET_RATES
} from "../actions";

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
      case GET_RATES:
        return { ...INITIAL_STATE, rates : action.payload}
      default:
      return state;
    }
}
