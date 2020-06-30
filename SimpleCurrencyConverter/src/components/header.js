import React,{Component} from "react";
import {Text,View,StyleSheet} from "react-native";


class Header extends Component{
  render(){
    return(
      <View style = {styles.headerWrapper}>
      <Text style = {styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper : {
    height : 80,
    alignItems : "center",
    backgroundColor : "rgb(0,129,245)",
    justifyContent : "center"
  },
  textStyle : {
    justifyContent : "center",
    alignItems : "center",
    fontSize : 25,
    color : "rgb(85,245,194)"

  }
})

export default Header;
