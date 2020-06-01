import AsyncStorage from '@react-native-community/async-storage';

const LOGIN_DATA_KEY = 'LOGIN_DATA_KEY';

const setLoginData = (userId, token, expirationDate) => {
  AsyncStorage.setItem(
    LOGIN_DATA_KEY,
    JSON.stringify({ userId, token, expirationDate })
  );
};

const getLoginData = async () => {
  const data = await AsyncStorage.getItem(LOGIN_DATA_KEY);
  return JSON.parse(data);
};

const clearLoginData = () => {
  AsyncStorage.removeItem(LOGIN_DATA_KEY);
};

export { setLoginData, getLoginData, clearLoginData };
