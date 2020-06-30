import {combineReducers} from "redux";
import RatesReducer from "./getRatesReducer";

export default combineReducers({
  rates : RatesReducer
})
