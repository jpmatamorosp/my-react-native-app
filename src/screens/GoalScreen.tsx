import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { HeaderItem } from '../interfaces/index';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import ListItem from '../components/ListItem';
import GoalInput from '../components/GoalInput';

const GoalScreen = () => {
  const [items, setItems] = useState<HeaderItem[]>([]);
  const [isAddOpen,setAddOpen] = useState(false);

  const addGoalHandler = (enteredGoal: string) => {
    setItems( (currentGoal) => [...currentGoal, { id: uuid(), text: enteredGoal }]);
    setAddOpen(false);
  }

  const deleteGoalHandler = (id: string) => {
    setItems( currentGoal => currentGoal.filter( g => g.id !== id));
  }

  const onCancel = () => {
    setAddOpen(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add new Goal' onPress={() => setAddOpen(true)}/>
      <GoalInput isOpen={isAddOpen} onAddGoal={addGoalHandler} onCancel={onCancel}/>
      <FlatList
          data={items}
          renderItem={ ({ item }) => <ListItem onDeleteGoal={deleteGoalHandler} item={item}/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});

export default GoalScreen;
