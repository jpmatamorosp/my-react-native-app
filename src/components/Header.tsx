import React, {FC, type PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'cornflowerblue',
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    color: '#fff',
  },
});

export default Header;
