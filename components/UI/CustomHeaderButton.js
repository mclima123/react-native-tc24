import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = props => (
  <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={23}
    color={Colors.primaryText}
    {...props}
  />
);

export const CustomHeaderButtons = props => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
  );
};

export { Item } from 'react-navigation-header-buttons';
