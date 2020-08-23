import {combineReducers} from "redux";
import SureReducer from "./surahsReducer";
import SelectedSurah from "./selectedSurahReducer";
import CityReducer from "./citiesReducer";

export default combineReducers({
    sureler : SureReducer,
    selectedSurah : SelectedSurah,
    cities : CityReducer
})