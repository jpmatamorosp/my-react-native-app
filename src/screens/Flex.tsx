import React from 'react';
import {View, Text, StyleSheet, ToastAndroid, Pressable} from 'react-native';

const Flex = () => {
  const showToast = () => {
    ToastAndroid.show('Toast message!', ToastAndroid.SHORT);
  };
  return (
    <View style={{...styles.container}}>
      <Pressable style={styles.firstChild} onPress={showToast}>
        <Text style={styles.text}>1</Text>
      </Pressable>
      <Pressable style={styles.secondChild} onPress={showToast}>
        <Text style={styles.text}>2</Text>
      </Pressable>
      <Pressable style={styles.thirdChild} onPress={showToast}>
        <Text style={{...styles.text, color: 'black'}}>3</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingBottom: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  firstChild: {
    flex: 1,
    marginRight: 15,
    backgroundColor: 'red',
    //width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondChild: {
    flex: 1,
    marginRight: 15,
    backgroundColor: 'darkblue',
    //width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdChild: {
    flex: 1,
    marginRight: 10,
    //width: 100,
    height: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Flex;
