import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import authenticationReducer from './store/reducers/auth';
import Colors from './constants/Colors';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
