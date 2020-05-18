import React from "react";
import {Text,View,StyleSheet} from "react-native";

const Header = ({text}) => {
  const {headerWrapper,textStyle} = styles;
  return (
    <View style = {headerWrapper}>
    <Text style = {textStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper : {
    width : "auto",
    height : 70,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "black"
  },
  textStyle : {
    justifyContent : "center",
    alignItems : "center",
    fontSize : 25,
    color : "white"
  }
})

export { Header };
