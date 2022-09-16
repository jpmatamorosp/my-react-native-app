import React, {FC, useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

type props = {
  onAddOrder: (enteredUPC: string) => void;
  isOpen: boolean;
  onCancel: () => void;
};

const OrderInput: FC<props> = ({onAddOrder, isOpen, onCancel}: props) => {
  const [enteredUPC, setEnteredUPC] = useState<string>('');

  const upcInputHandler = (enteredText: string) => {
    setEnteredUPC(enteredText);
  };

  const addOrderHandler = () => {
    if (enteredUPC === '') return;
    onAddOrder(enteredUPC);
    setEnteredUPC('');
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="UPC"
          style={styles.textUPC}
          onChangeText={upcInputHandler}
          value={enteredUPC}
          autoFocus={true}
        />
        <View style={styles.butttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addOrderHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUPC: {
    width: '80%',
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  butttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default OrderInput;
