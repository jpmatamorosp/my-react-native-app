import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Pressable,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import OrderInput from '../components/OrderInput';
import ListItem from '../components/ListItem';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {OrderItem} from '../interfaces';

const Order = () => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [isAddOpen, setAddOpen] = useState(false);

  const addOrderHandler = (enteredOrder: string) => {
    setItems(currentOrder => [
      ...currentOrder,
      {id: uuid(), text: enteredOrder},
    ]);
    setAddOpen(false);
  };

  const deleteOrderHandler = (id: string) => {
    Alert.alert(
      'Remove action!',
      'Are you sure you want to remove the selected item',
      [
        {
          text: 'Ok',
          onPress: () =>
            setItems(currentOrder => currentOrder.filter(g => g.id !== id)),
        },
        {text: 'Cancel', onPress: showCancelMessage, style: 'cancel'},
      ],
    );
  };

  const onCancel = () => {
    setAddOpen(false);
  };

  const showCancelMessage = () => {
    ToastAndroid.show('You cancel the remove action!', ToastAndroid.SHORT);
  };

  const showAlert = (keyValue: string) => {
    Alert.alert('Key press', keyValue, [
      {text: 'Ok', onPress: () => console.log('Ok')},
      {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'},
    ]);
  };

  return (
    <View style={{...styles.container}}>
      <Pressable style={styles.firstChild}>
        <Text style={styles.text}>Orders</Text>
      </Pressable>
      <View style={{width: '100%'}}>
        <Button
          title="Add new Order"
          color="cornflowerblue"
          onPress={() => setAddOpen(true)}
        />
        <OrderInput
          isOpen={isAddOpen}
          onAddOrder={addOrderHandler}
          onCancel={onCancel}
        />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem onDeleteOrder={deleteOrderHandler} item={item} />
          )}
        />
      </View>
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

export default Order;
