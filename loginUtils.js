import { AsyncStorage } from 'react-native';

let token;

export const signIn = newToken => AsyncStorage.setItem('AUTH_TOKEN', newToken);
export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  token = AsyncStorage.getItem('AUTH_TOKEN');
  return token;
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.remove('AUTH_TOKEN');
};
