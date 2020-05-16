import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { Spinner }
