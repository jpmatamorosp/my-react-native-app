import React, { FC, useState, type PropsWithChildren } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { OrderEntry } from '../interfaces/index';
import Header from './Header';

type props = {
    onAddGoal: (enteredGoal: string) => void,
    isOpen: boolean,
    onCancel: () => void
}

const GoalInput: FC<props> = ({onAddGoal, isOpen, onCancel}: props) => {
    const [enteredGoal,setEnteredGoal] = useState<string>('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal === "") return;
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={isOpen} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Course Goal' 
                    style={styles.textGoal} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    autoFocus={true}
                />
                <View style={styles.butttonContainer}>
                    <View style={styles.button}><Button title='Add' onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title='Cancel' color="red" onPress={onCancel} /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
      },
      textGoal: {
        width: '80%',
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      butttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
      },
      button: {
        width: '40%'
      }
});

export default GoalInput;