import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Headlines from "./Headlines";
import MainPage from "./mainPage";
import NewsWebView from "./NewsWebView";


const Stack = createStackNavigator();


const App = ({route}) => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainPage} options={{           
          headerStyle:{
            backgroundColor: '#f4511e',
          },          
          headerTitleStyle:{
            fontWeigth : "bold"
          },
          headerTintColor: '#fff'
        }} />
          <Stack.Screen name="Headlines" component={Headlines} options={({route}) => ({
            title : route.params.category + " Haberleri"
          })} />
          <Stack.Screen 
          name="WebView" 
          component={NewsWebView} 
          options = {({route}) => {
            title : route.params.title
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
};

export default App;