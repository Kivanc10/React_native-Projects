import {
SELECT_BOOK,DESELECTBOOK
} from "../actions";

const INITIAL_STATE = {

}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return action.payload
        case DESELECTBOOK:
            return {} 
        default:
            return state;
    }
}
