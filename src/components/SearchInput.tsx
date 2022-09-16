import React, {useState} from 'react';
import {View, StyleSheet, ToastAndroid, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  upcInputHandler: (enteredText: string) => void;
  onFocus: () => void;
  enteredUPC: string;
  onReturnKeyPress: () => void;
};
const SearchInput = ({
  enteredUPC,
  upcInputHandler,
  onFocus,
  onReturnKeyPress,
}: Props) => {
  return (
    <View style={{...styles.container}}>
      <Icon name="search" size={25} color="cornflowerblue" />
      <TextInput
        placeholder="Search..."
        style={styles.text}
        onChangeText={upcInputHandler}
        value={enteredUPC}
        autoComplete="off"
        keyboardType="numeric"
        inlineImageLeft="search"
        onFocus={onFocus}
        returnKeyType="search"
        maxLength={20}
        onSubmitEditing={onReturnKeyPress}
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 25,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 40,
    padding: 10,
  },
  text: {
    color: 'cornflowerblue',
    fontSize: 20,
    width: '90%',
    fontWeight: 'bold',
    marginLeft: 10,
    //backgroundColor: 'black',
  },
});

export default SearchInput;
