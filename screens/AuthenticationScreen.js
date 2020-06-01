import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { signUp, signIn } from '../store/actions/auth';

import CustomText from '../components/UI/CustomText';
import Colors from '../constants/Colors';
import CustomButton from '../components/UI/CustomButton';

const AuthenticationScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //when press top button
  const loginHandler = async () => {
    setIsLoading(true);
    try {
      await dispatch(signIn(email, password));
      // setIsLoading(false);
    } catch (err) {
      Alert.alert('Error!', err.message);
      setIsLoading(false);
    }
  };

  //when press bottom button
  const registerHandler = async () => {
    setIsLoading(true);
    try {
      await dispatch(signUp(email, password));
      // setIsLoading(false);
    } catch (err) {
      Alert.alert('Error!', err.message);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator size={100} color={Colors.highlight} />
            </View>
          )}
          <CustomText style={styles.title}>TCFlix24</CustomText>
          <View style={styles.formContainer}>
            <CustomText style={styles.inputLabel}>E-mail</CustomText>
            <TextInput
              style={{ ...styles.input, marginBottom: 20 }}
              keyboardType="email-address"
              placeholder="Enter your e-mail"
              autoCapitalize="none"
              placeholderTextColor={Colors.secondaryText}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <CustomText style={styles.inputLabel}>Password</CustomText>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter your password"
              placeholderTextColor={Colors.secondaryText}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <CustomButton
              title="Log In"
              style={{ marginTop: 20 }}
              onPress={loginHandler}
            />
            <CustomButton
              title="Register"
              style={{ marginTop: 20, backgroundColor: Colors.primary }}
              onPress={registerHandler}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    borderColor: Colors.primaryText,
    borderWidth: 2,
    borderRadius: 30,
  },
  inputLabel: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    color: Colors.primaryText,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryText,
    width: 200,
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
  },
});

export default AuthenticationScreen;
