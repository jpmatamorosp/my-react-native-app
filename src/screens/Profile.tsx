import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Pressable,
  Button,
} from 'react-native';
import {useAuth} from '../hooks/auth';

const Profile = () => {
  const showToast = () => {
    ToastAndroid.show('Toast message!', ToastAndroid.LONG);
  };

  const {signOut} = useAuth();
  return (
    <View style={{...styles.container}}>
      <Pressable style={styles.firstChild} onPress={showToast}>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flex: 1,
        }}>
        <View style={{width: '100%'}}>
          <Button
            title="SignOut"
            color="cornflowerblue"
            onPress={async () => await signOut()}
          />
        </View>
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
    //flex: 1,
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

export default Profile;
