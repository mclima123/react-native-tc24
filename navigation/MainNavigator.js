import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
} from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import AuthenticationScreen from '../screens/AuthenticationScreen';
import HomeScreen from '../screens/HomeScreen';
import VideoDetailScreen from '../screens/VideoDetailScreen';

import Colors from '../constants/Colors';

const defaultOptions = {
  cardStyle: { backgroundColor: Colors.background },
  headerStyle: { backgroundColor: Colors.primary },
  headerTintColor: Colors.primaryText,
  headerStatusBarHeight: 0, //fix for header height flicker on first render
};

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={defaultOptions}>
      <AuthStack.Screen
        name="AuthenticationScreen"
        component={AuthenticationScreen}
        options={{ title: 'Login' }}
      />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
  const dispatch = useDispatch();

  return (
    <HomeStack.Navigator
      screenOptions={{
        ...defaultOptions,
        headerMode: 'screen',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Feed' }}
      />
      <HomeStack.Screen name="VideoDetail" component={VideoDetailScreen} />
    </HomeStack.Navigator>
  );
};
