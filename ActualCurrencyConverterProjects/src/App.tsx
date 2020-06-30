import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from "./components/home";
import Golds from "./components/golds";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GuncelDoviz from "./components/guncelDoviz";
import AboutMe from "./components/aboutMe";


const Drawer = createDrawerNavigator();

class App extends Component {
  
    // android banner  ca-app-pub-7845548592670563/8766580682
    render() {
      return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Doviz">        
          <Drawer.Screen name="Doviz" component={GuncelDoviz} options={{title:"Güncel Döviz"}} />
          <Drawer.Screen name="Gold" component={Golds} options={{title:"Altın"}} />
          <Drawer.Screen name="Calculate" component={Home} options={{title:"Hesaplama"}} />
          <Drawer.Screen name="About" component={AboutMe} options={{title:"Hakkımızda"}} />
        </Drawer.Navigator>
      </NavigationContainer>
      );
    }
}


export default App;