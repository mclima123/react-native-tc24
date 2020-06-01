import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AuthStackNavigator, HomeStackNavigator } from './MainNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = () => {
  const didTryAL = useSelector(state => state.authentication.didTryAL);
  const isAuth = useSelector(state => !!state.authentication.token);

  return (
    <NavigationContainer>
      {!isAuth && !didTryAL && <StartupScreen />}
      {!isAuth && didTryAL && <AuthStackNavigator />}
      {isAuth && <HomeStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
