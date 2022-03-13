import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import Daily from './app/screens/Daily';
import Home from './app/screens/Home';
import AppNavigator from './app/navigation/AppNavigator';
import Weekly from './app/screens/Weekly';
// import { navigationRe } from './app/navigation/rootNavigation';



const screenWidth = Dimensions.get("window").width;

export default function App() {
  
  return (
    <NavigationContainer >
      <AppNavigator/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
