import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Flex from '../screens/Flex';
import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="AppHome">
      <Screen name="AppHome" component={Home} />
      <Screen name="Flex" component={Flex} />
    </Navigator>
  );
}
