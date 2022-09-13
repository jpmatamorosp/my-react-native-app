import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {Alert} from 'react-native';

import {api} from '../services/api';
import {database} from '../database';
import {User as ModelUser} from '../database/models/User';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  isLogging: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updatedUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);
  const [isLogging, setIsLogging] = useState(false);

  async function signIn({email, password}: SignInCredentials) {
    try {
      setIsLogging(true);
      console.log({email, password});
      const {data} = await api.post('/Account/login', {
        userCode: 'test',
        userPassword: '1a',
      });

      console.log({data});

      if (data.message === 'Invalid username or password') {
        setIsLogging(false);

        return Alert.alert(
          'Authentication error',
          'Invalid email or username!',
        );
      }

      setIsLogging(false);

      const {token} = data;

      const user: User = {
        id: '1',
        user_id: '1',
        email,
        name: 'Jean',
        avatar: '',
        token,
      };

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //api.defaults.headers.Authorization = `Bearer ${token}`;
      await database.adapter.setLocal('token', token);

      await database.write(async () => {
        const newUser = await database
          .get<ModelUser>('users')
          .create(newUser => {
            //newUser.id = newUser.id,
            newUser.user_id = user.id;
            newUser.name = user.name;
            newUser.email = user.email;
            newUser.avatar = user.avatar;
            newUser.token = user.token;
          });

        setIsLogging(false);

        if (!!newUser) setData(newUser._raw as unknown as User);
        else return Alert.alert('Authentication error', 'Unable to login!');
      });
    } catch (error) {
      console.error({error});
      return Alert.alert('Error', 'Unable to login!');
    }
  }

  async function signOut() {
    try {
      await database.write(async () => {
        const userCollection = database.get<ModelUser>('users');

        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();

        setData({} as User);
      });
    } catch (error) {
      console.log(error);
      return Alert.alert('Update error', 'Unable to update user data!');
    }
  }

  async function updatedUser(user: User) {
    try {
      await database.write(async () => {
        const userCollection = database.get<ModelUser>('users');

        const userSelected = await userCollection.find(user.id);
        await userSelected.update(userData => {
          (userData.name = user.name), (userData.avatar = user.avatar);
        });
        setData(user);
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      await database.write(async () => {
        const userCollection = database.get<ModelUser>('users');
        const response = await userCollection.query().fetch();

        if (response.length > 0) {
          const userData = response[0]._raw as unknown as User;

          //api.defaults.headers.authorization = `Bearer ${userData.token}`;
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${userData.token}`;
          setData(userData);
        }
      });
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLogging,
        signIn,
        signOut,
        updatedUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
