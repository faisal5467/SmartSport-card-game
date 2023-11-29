import { StyleSheet, Text, View, StatusBar, Platform  } from 'react-native'
import React, {useEffect, useState} from 'react'
// import { LanguageProvider } from './src/language/LanguageContext';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from './src/screens/LoadingScreen';
import MenuScreen from './src/screens/MenuScreen';
import GameScreen from './src/screens/GameScreen';
import PauseScreen from './src/screens/PauseScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import CheckScreen from './src/screens/CheckScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();
const App = () => {

  useEffect(() => {
    StatusBar.setHidden(true);



   
  }, []);
  return (
    // <LanguageProvider>
<NavigationContainer>
<Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{headerShown:false}}>
  <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
  <Stack.Screen name="MenuScreen" component={MenuScreen} />
  <Stack.Screen name="GameScreen" component={GameScreen} />
  <Stack.Screen name="PauseScreen" component={PauseScreen} />
  <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
  <Stack.Screen name="CheckScreen" component={CheckScreen} />
  <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
</Stack.Navigator>
</NavigationContainer>
// </LanguageProvider>
    // <View>
    //   <SettingScreen/>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})