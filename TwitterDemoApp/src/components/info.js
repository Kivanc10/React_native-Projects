import React from 'react';
import { View, StyleSheet, Text ,ScrollView} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Ionicons } from '@expo/vector-icons';
import {Actions} from "react-native-router-flux";

const TabIcon = (props) => (
  <Ionicons
    name={'md-apps'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class Info extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>

      <ScrollView>

      <Card>
        <CardImage
          source={{uri : "https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}}
          title="New Tweet App"
        />
        <CardTitle
          subtitle="Mention"
        />
        <CardContent text="France, Paris" />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Share"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>

      <Card>
        <CardImage
          source={{uri : "https://images.unsplash.com/photo-1553532435-93d532a45f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600"}}
          title="Develop Think"
        />
        <CardTitle
          subtitle="Emoji"
        />
        <CardContent text="Turkey, Kocaeli" />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Like"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>

      <Card>
        <CardImage
          source={{uri : "https://images.unsplash.com/photo-1567020250037-17e5372676d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
          title="Keep in touch"
        />
        <CardTitle
          subtitle="Spare time happily"
        />
        <CardContent text="England, London" />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Like"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>

      <Card>
        <CardImage
          source={{uri : "https://images.unsplash.com/photo-1539820156190-faf186a57d94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
          title="Please yourself"
        />
        <CardTitle
          subtitle="even swing"
        />
        <CardContent text="USA, New Jersey" />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Like"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>

      <Card>
        <CardImage
          source={{uri : "https://images.unsplash.com/photo-1478301672914-6eba52f60d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
          title=":)"
        />
        <CardTitle
          subtitle="Smilee"
        />
        <CardContent text="USA, Los Angeles" />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Like"
            color="#FEB557"
          />
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#FEB557"
          />
        </CardAction>
      </Card>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle} onPress={() => Actions.tabbar()}>Sign up now !</Text>
      </View>
</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 20
  },
  textWrapper : {
    justifyContent:"center",
    alignItems:"center",
    margin : 15
  },
  textStyle : {
    fontWeight:"bold",
    color:"gray",
    fontSize : 25
  }
});
