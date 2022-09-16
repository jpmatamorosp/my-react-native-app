import React, {FC, type PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OrderItem} from '../interfaces';

const ItemDetail: FC<{
  item: OrderItem;
}> = ({item: {description, itemCode, brand, pack, size}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemCode}</Text>
      <Text style={styles.text}>{brand}</Text>
      <Text style={styles.text}>{pack}</Text>
      <Text style={styles.text}>{size}</Text>
      <Text style={styles.text}>{description}</Text>
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
    borderRadius: 20,
    padding: 40,
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

export default ItemDetail;
