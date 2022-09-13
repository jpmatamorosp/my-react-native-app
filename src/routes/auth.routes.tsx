import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn} from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
    </Navigator>
  );
}
