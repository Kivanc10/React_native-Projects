import React, { Component } from 'react';
import {View, Text,Button ,StyleSheet ,Alert} from 'react-native';
import { connect } from 'react-redux';
import { TextArea } from './common';
import { changeTweet,updateTweet ,deleteTweet } from '../actions';


class UpdateTweets extends Component{
  componentDidMount(){
    const {tweet} = this.props.tweet; // first of all , call => tweetChanged
    this.props.changeTweet(tweet);
    this.checkEmail = this.checkEmail.bind(this);
  }
  checkEmail(callback){
    const {email} = this.props.user;
    const tweetEmail = this.props.tweet.email;
    if (tweetEmail === email) {
      callback();
    }
    else {
      Alert.alert(
        "Wrong email",
        "So you cannot deleted or updated this tweet",
        [
          {text : "OK",onPress : () => console.log("wrong email")}
        ]
      )
    }
  }
  onChangeTweet(tweet){
    this.props.changeTweet(tweet);
  }
  onUpdateTweet(){
      this.checkEmail(() => {
        const tweetObj = {...this.props.tweet,
                              tweet : this.props.tweetForm.tweet}
        this.props.updateTweet(tweetObj);
      })
  }

  onDeleteTweet(){
    this.checkEmail(() => {
      Alert.alert(
        'Are you sure?',
          'This tweet will be deleted after you clicked OK.',
          [
            {text : "OK",onPress : () => {
              const {uid} = this.props.tweet;
              this.props.deleteTweet(uid);
            }},
            {text : "Cancel" , onPress : () => console.log("cancel")}
          ]
      )
    })
}
  render(){
    const {tweetForm} = this.props;
    return (
      <View style={styles.updateContainer}>
        <View>
          <TextArea placeholder='Type here...'
                    value={tweetForm.tweet}
                    onChangeText={this.onChangeTweet.bind(this)}
                    />
          </View>
          <View style={{marginTop : 20}}>
            <Button
            title = "Update"
            onPress = {this.onUpdateTweet.bind(this)}
            />
        </View>
        <View style={{marginTop : 20}}>
          <Button
          title = "Delete"
          onPress = {this.onDeleteTweet.bind(this)}
          />
      </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  updateContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  }
});


const mapStateToProps = (state) => {
  return {
    user : state.auth.user,
    tweetForm : state.tweetForm
  }
}

export default connect(mapStateToProps,{changeTweet ,updateTweet ,deleteTweet})(UpdateTweets);
