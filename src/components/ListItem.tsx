import React, {FC} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {OrderItem} from '../interfaces/index';
import Icon from 'react-native-vector-icons/FontAwesome';

type props = {
  item: OrderItem;
  onDeleteOrder: (id: string) => void;
};

const ListItem: FC<props> = ({item: {id, text}, onDeleteOrder}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={onDeleteOrder.bind(this, id)}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{text}</Text>
        <Icon name="remove" size={20} color="firebrick" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#fff',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
});

export default ListItem;
