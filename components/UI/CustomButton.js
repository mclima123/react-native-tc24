import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import CustomText from './CustomText';
import Colors from '../../constants/Colors';

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <CustomText style={styles.btnText}>{props.title}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  btnText: { fontSize: 16, fontWeight: 'bold' },
});

export default CustomButton;
