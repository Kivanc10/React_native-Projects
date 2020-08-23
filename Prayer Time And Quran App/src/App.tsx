
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entry from "./components/entry";
import Detail from "./components/detail";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Others from "./components/others";
import NamazSaati from "./components/namazSaat";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
     <Provider store={createStore(reducers)}>
       <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'ios-book' : 'ios-book';
            }
            else if (route.name === 'Others') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Namaz') {
              iconName = focused ? 'ios-alarm' : 'ios-alarm';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
           <Tab.Screen name="Home" component={Entry} />
           <Tab.Screen name="Detail" component={Detail} />
           <Tab.Screen name="Others" component={Others} />
           <Tab.Screen name="Namaz" component={NamazSaati} />
         </Tab.Navigator>
       </NavigationContainer>
     </Provider>
    );
}

export default App;
