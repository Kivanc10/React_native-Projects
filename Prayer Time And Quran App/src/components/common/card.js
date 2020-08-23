import React from "react";
import {View,StyleSheet} from "react-native";

const Card = (props) => {
    return (
        <View style={styles.wrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        padding : 15,
        marginTop : 10,
        borderWidth : 1,
        borderColor : "black",
        justifyContent : "center",
        alignItems : "center"
    }
})

export {Card};