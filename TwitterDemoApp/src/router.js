import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';
import Info from "./components/info";
import {Text} from "react-native";


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const RouterComp = () => {
  return (
    <Router>
      <Scene key = "root" hideNavBar={true}>
      <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
        <Scene key='auth' title="HOME" icon={TabIcon}>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 initial
                 />
        </Scene>
        <Scene key='info' title="INFO" icon={TabIcon}>
          <Scene key='info'
                 component={Info}
                 title='Info' />
            </Scene>
        </Scene>
        <Scene key = "main">
          <Scene key="tweets"
               component={Tweets}
               rightTitle='New'
              onRight={() => Actions.newTweet()}
               title="Tweets" />
          <Scene key="newTweet"
                  component={NewTweet}
                  title="New Tweet" />
              <Scene key="newTweet"
                component={NewTweet}
                    title="New Tweet" />
            <Scene key="updateTweet"
                component={UpdateTweet}
                  title="Update Tweet" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComp;
