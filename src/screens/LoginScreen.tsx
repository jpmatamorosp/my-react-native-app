import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
//import * as Yup from 'yup';

import { useAuth } from '../hooks/auth';

// import { Button } from '../components/Button';
// import { Input } from '../components/Input';
// import { PasswordInput } from '../components/PasswordInput';


export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigation = useNavigation();
    const { signIn, isLogging } = useAuth();
  
    async function handleSignIn() {
      try {
        // const schema = Yup.object().shape({
        //   email: Yup.string()
        //     .required('E-mail obrigatório')
        //     .email('Digite um e-mail válido'),
        //   password: Yup.string()
        //     .required('A senha é obrigatória')
        // });
  
        // await schema.validate({ email, password });
  
        signIn({ email, password });
      } catch (error: any) {
        //if (error instanceof Yup.ValidationError) {
          Alert.alert('Opa', error.message);
        // } else {
        //   Alert.alert(
        //     'Erro na autenticação',
        //     'Ocorreu um erro ao fazer login, verifique as credenciais'
        //   )
        // }
      }
    }
  
    function handleNewAccount() {
      navigation.navigate('Goal');
    }
  
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{padding: 24}}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
  
            <View style={{padding: 24}}>
              <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />
  
              <TextInput
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
  
              <Button
                title="Signin"
                color=""
                onPress={handleNewAccount}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    
  });