/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';
import { HeaderItem } from './interfaces/index';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import ListItem from './components/ListItem';
import OrderEntryComponent from './components/GoalInput';
import GoalInput from './components/GoalInput';

const App = () => {
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

export default App;
