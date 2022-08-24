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
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';
import { HeaderItem } from './interfaces/index';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState<HeaderItem[]>([
    { id: uuid(), text: "First"},
    { id: uuid(), text: "Second" },
    { id: uuid(), text: "Third" }
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shopping"/>
      <FlatList
        data={items}
        renderItem={ (item) => <ListItem item={item.item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
