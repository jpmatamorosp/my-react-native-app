import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import ItemDetail from '../components/ItemDetail';
import SearchInput from '../components/SearchInput';
import {useAuth} from '../hooks/auth';
import {useItem} from '../hooks/item';

const Search = () => {
  const [enteredUPC, setEnteredUPC] = useState<string>('');
  const {isLoading, selected, find, clearSelection} = useItem();
  const {user} = useAuth();

  const upcInputHandler = (enteredText: string) => {
    setEnteredUPC(enteredText);
  };

  const onFocusHandler = () => setEnteredUPC('');

  const showToast = () => {
    find(enteredUPC, 'DPIP1');
    ToastAndroid.show(`You has press enter!`, ToastAndroid.LONG);
  };

  useEffect(() => {
    clearSelection();
  }, []);

  return (
    <View style={{...styles.container}}>
      <Header title="Find Items" />
      <SearchInput
        upcInputHandler={upcInputHandler}
        onFocus={onFocusHandler}
        enteredUPC={enteredUPC}
        onReturnKeyPress={showToast}
      />
      {isLoading && <ActivityIndicator size="large" />}
      <View style={styles.textContainer}>
        {!selected.itemCode && (
          <Text style={styles.text}>No items to show!</Text>
        )}
      </View>
      {selected.itemCode && <ItemDetail item={selected} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: '100%',
    //backgroundColor: 'black',
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
    color: 'cornflowerblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 15,
  },
});

export default Search;
