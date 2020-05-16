import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from './router';



class App extends Component {
  componentDidMount(){
    const firebaseConfig = {
    apiKey: "AIzaSyBTumG8LYFjqS3qpc45uWfPwruAtquQLNY",
    authDomain: "deneme11-75b2d.firebaseapp.com",
    databaseURL: "https://deneme11-75b2d.firebaseio.com",
    projectId: "deneme11-75b2d",
    storageBucket: "deneme11-75b2d.appspot.com",
    messagingSenderId: "581491627533",
    appId: "1:581491627533:web:6b0887af8687116c722744",
    measurementId: "G-W3H32TTGNF"
  };
  firebase.initializeApp(firebaseConfig);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
