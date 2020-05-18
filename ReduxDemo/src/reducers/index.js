import {combineReducers} from "redux";
import BookListReducer from "./bookListReducer";
import SelectedBookReducer from "./selectedBookReducer";

export default combineReducers({
  books : BookListReducer,
  selectedBook : SelectedBookReducer
})
