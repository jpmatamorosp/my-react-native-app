import React from 'react';
import {StyleSheet, useWindowDimensions, ToastAndroid } from 'react-native';
import GoalScreen from './src/screens/GoalScreen';
import FlexScreen from './src/screens/FlexScreen';

//const windowsHeight = Dimensions.get('window').height;
const App = () => {
  return (
    <GoalScreen />
    // <FlexScreen />
  );
};

const styles = StyleSheet.create({
  
});

export default App;
