import React, { Component } from 'react';
import {View, Text , StyleSheet ,Button} from 'react-native';
import { TextArea } from './common';
import { connect } from 'react-redux';
import { changeTweet ,sendTweet } from '../actions';



class NewTweet extends Component{
onChangeTweet(tweet){
  this.props.changeTweet(tweet);
}

sendTweet(){
  this.props.sendTweet(this.props.tweet);
}
  render(){
    return (
      <View style={styles.newTweetContainer}>
        <TextArea
        placeholder = "Write here.."
        onChangeText = {this.onChangeTweet.bind(this)}
        />
        <Button
        title = "Send"
        onPress = {this.sendTweet.bind(this)}
        color = "#7B8D93"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTweetContainer : {
    flex : 1,
    backgroundColor: 'white',
    padding: 15
  }
})

const mapStateToProps = state => {
  const { tweet } = state.tweetForm;
  return {
    tweet
  }
}

export default connect(mapStateToProps,{ changeTweet ,sendTweet })(NewTweet);
