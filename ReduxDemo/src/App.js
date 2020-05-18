import React ,{Component} from "react";
import {Text,View} from "react-native";
import {Header} from "./components/common";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import BookItem from "./components/bookItem";

class App extends Component {
  render(){
    return (
      <Provider store = {createStore(reducers)}>
      <View>
      <Header text = "Book Apps"/>
      <BookItem />
      </View>
      </Provider>
    );
  }
}

export default App;
