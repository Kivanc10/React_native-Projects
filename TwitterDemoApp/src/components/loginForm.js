import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {Input,Spinner} from "./common";
import firebase from "firebase";
import { connect } from 'react-redux';
import { emailChanged, passwordChanged ,loginUser} from '../actions';



class LoginForm extends Component{
onEmailChanged(text){
  this.props.emailChanged(text);
}

onPasswordChanged(text){
  this.props.passwordChanged(text);
}


onButtonClicked(){
  const {email,password} = this.props;
  this.props.loginUser(email,password);
}



onLoginFailed(){
  this.setState({
    loading : false,
    error : "Authentication failed"
  })
}
  render(){
    const {errorText} = styles;
    const { error, loading } = this.props;

    const errorMsg = error ? (
      <Text style={styles.errorText}>
        {error}
      </Text>
    ) : null;
    const loadingView = loading ? (
      <Spinner />
    ) : (
      <Button
      title = "Login"
      onPress={this.onButtonClicked.bind(this)}
      color = "black"
      />
    )
    return (
      <View style={{padding:30}}>
          <View>
            <Input
            text="Email"
            inputPlaceHolder="Enter email"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
            />
          </View>
          <View>
          <Input
          text="Password"
          inputPlaceHolder="Enter password"
          secureTextEntry
          onChangeText={this.onPasswordChanged.bind(this)}
          value={this.props.password}
          />
          </View>
          <View style={{marginTop : 10}}>
            {loadingView}
            {errorMsg}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
})

const mapStateToProps = (state) => {
  const {email,password,loading,error} = state.auth;
  return {
    email,password,loading,error
  }
}

export default connect(mapStateToProps,{ emailChanged, passwordChanged ,loginUser})(LoginForm);
