import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import FlexScreen from "../screens/FlexScreen";
import { SplashScreen } from '../screens/SplashScreen';
import GoalScreen from './../screens/GoalScreen';

const { Navigator, Screen } = createStackNavigator();

export function SplashRoutes() {

    return (
        <Navigator initialRouteName="Goal">
            <Screen 
                name="Splash"
                component={SplashScreen}
            />
            <Screen
                name="Goal"
                component={GoalScreen}
            />
            <Screen
                name="Flex"
                component={FlexScreen}
            />
        </Navigator>
    )
}