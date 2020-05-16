import React from 'react';
import { Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({text,inputPlaceHolder,onChangeText,secureTextEntry,value}) => {
  const {inputWrapper,inputStyle,textStyle} = styles;
  return (
    <View style={inputWrapper}>
      <Text style={textStyle}>{text}</Text>
      <TextInput
      style={inputStyle}
      placeholder = {inputPlaceHolder}
      onChangeText = {onChangeText}
      secureTextEntry = {secureTextEntry}
      value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
  flexDirection: 'row',
  height: 50,
  width: 'auto',
  borderColor: '#E5E5E8',
  borderBottomWidth: 1,
  alignItems: 'center',
  marginRight : 10
},
textStyle: {
    paddingLeft: 20,
    fontSize: 17,
    flexGrow: 1
  },
  inputStyle: {
    fontSize: 17,
    flexGrow: 2,
    marginLeft : 15
  }
})

export {Input};
