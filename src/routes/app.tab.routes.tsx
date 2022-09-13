import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';
import {AppStackRoutes} from './app.stack.routes';
import Goal from '../screens/Goal';
import Flex from '../screens/Flex';
import Icon from 'react-native-vector-icons/FontAwesome';

const {Navigator, Screen} = createBottomTabNavigator();
export function AppTabRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="MyCars">
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
        component={Goal}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'search'} size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Flex}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'user'} size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
