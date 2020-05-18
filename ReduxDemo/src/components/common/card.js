import React from "react";
import {Text,View,StyleSheet} from "react-native";

const Card = (props) => {
  return (
    <View style = {styles.cardStyle}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  cardStyle : {
    padding : 15,
    marginTop : 10,
    borderWidth : 1,
    borderColor : "black",
    justifyContent : "center",
    alignItems : "center"
  }
})

export {Card};
