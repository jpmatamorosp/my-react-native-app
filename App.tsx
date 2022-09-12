import * as React from 'react';
import {StyleSheet } from 'react-native';
import GoalScreen from './src/screens/GoalScreen';
import FlexScreen from './src/screens/FlexScreen';
import { AppProvider} from './src/hooks'
import { Routes } from './src/routes';
//import { SplashScreen } from './src/screens/SplashScreen';
import { SignIn } from './src/screens/LoginScreen'
 

import { createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
