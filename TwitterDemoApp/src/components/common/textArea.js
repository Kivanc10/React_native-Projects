import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const TextArea = ({placeholder,onChangeText,value}) => {
  return (
    <View style={styles.textAreaWrapper}>
      <TextInput
      placeholder = {placeholder}
      onChangeText = {onChangeText}
      multiLine = {true}
      value={value}
      style = {styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textAreaWrapper : {
    borderWidth: 1,
    borderColor: '#CFD8DC',
    height: 200,
    justifyContent : "center",
    alignItems : "center"
  },
  input : {
    height: 200,
    color: '#7B8D93',
    fontSize: 18,
  }
})


export {TextArea};
