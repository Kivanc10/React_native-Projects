import React,{Component} from "react";
import {Text,View} from "react-native";
import Converter from "./components/converter";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import Header from "./components/header";


class App extends Component{
  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store = {store}>
        <View>
        <Header headerText = "Mobil Converter" />
        <Converter />
        </View>
      </Provider>
    );
  }
}


export default App;
