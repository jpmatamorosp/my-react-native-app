import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppStackRoutes} from './app.stack.routes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Order from '../screens/Order';
import Faborite from '../screens/Favorite';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const {Navigator, Screen} = createBottomTabNavigator();
export function AppTabRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'search'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Faborite}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'heart'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Orders"
        component={Order}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'shopping-cart'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'user'} size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
