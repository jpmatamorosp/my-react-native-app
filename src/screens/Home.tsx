import React from 'react';
import {View, Text, StyleSheet, ToastAndroid, Pressable} from 'react-native';

const Home = () => {
  const showToast = () => {
    ToastAndroid.show('Toast message!', ToastAndroid.SHORT);
  };
  return (
    <View style={{...styles.container}}>
      <Pressable style={styles.firstChild} onPress={showToast}>
        <Text style={styles.text}>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 45,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#eee',
    flex: 1,
  },
  firstChild: {
    marginRight: 15,
    backgroundColor: 'cornflowerblue',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
