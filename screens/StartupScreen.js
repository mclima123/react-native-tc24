import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { getLoginData } from '../helpers/localStorage/localStorageManager';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { setDidTryAL, authenticate } from '../store/actions/auth';

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      try {
        const loginData = await getLoginData();

        if (!loginData) {
          //if there's no login data stored, navigate to login screen
          dispatch(setDidTryAL());
        } else {
          //else, check if token is still valid
          const { userId, token, expirationDate } = loginData;
          let remainingTime = new Date(expirationDate) - new Date();

          if (remainingTime > 0) {
            dispatch(authenticate(userId, token, expirationDate));
          } else {
            dispatch(setDidTryAL());
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    tryLogin();
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size={100} color={Colors.highlight} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
});

export default StartupScreen;
