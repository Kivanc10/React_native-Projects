import React from "react";
import {Text,View,StyleSheet} from "react-native";

const Header = ({headerText}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>{headerText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper : {
        height : 70,
        backgroundColor : "tomato",
        justifyContent : "center",
        alignItems : "center"
    },
    headerText : {
        fontSize : 20,
        color : "white"
    }
})

export {Header};