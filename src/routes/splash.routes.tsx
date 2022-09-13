import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../hooks/auth';
import {AppTabRoutes} from './app.tab.routes';
import {AuthRoutes} from './auth.routes';
import {SignIn} from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

export function SplashRoutes() {
  const {user} = useAuth();
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={user.id ? AppTabRoutes : AuthRoutes}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
