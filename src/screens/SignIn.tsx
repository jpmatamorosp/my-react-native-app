import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';
import * as Yup from 'yup';

import { useAuth } from '../hooks/auth';
import PasswordInput from '../components/PasswordInput';
import EmailInput from '../components/EmailInput';


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const { signIn, isLogging } = useAuth();
    
    async function handleSignIn() {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is Required')
            .email('Enter a valid email address'),
          password: Yup.string()
            .required('Password is mandatory')
        });
  
        await schema.validate({ email, password });
  
        signIn({ email: "jean@gmail.com", password: "Pass" });
      } catch (error: any) {
        if (error instanceof Yup.ValidationError) {
          Alert.alert('Error', error.message);
        } else {
          Alert.alert(
            'Authentication Error',
            'There was an error logging in, check credentials'
          )
        }
      }
    }
  
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <View style={styles.header}>
              <Text style={styles.title}>
                We're{'\n'}almost there.
              </Text>
              <Text style={styles.subtitle}>
                Login to get started{'\n'}
                an amazing experience.
              </Text>
            </View>

            <View style={styles.form}>
              <EmailInput
                iconName='envelope'
                placeholder="Email"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />
              <PasswordInput
                iconName='lock'
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
              />
            </View>
  
            <View>
              <Button
                title="Login"
                onPress={handleSignIn}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      padding: 24, 
      backgroundColor: 'cornflowerblue'
    },
    header: {
      width: '100%',
      marginTop: 64
    },
    title: {
      textAlign: 'center',
      fontSize: 40,
      //fontFamily: 'secundaty_600'
      color: '#47474D'
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 15,
      //fontFamily: 'secundaty_600'
      color: '#7A7A80'
    },
    form: {
      width: '100%',
      marginTop: 64
    },
  });