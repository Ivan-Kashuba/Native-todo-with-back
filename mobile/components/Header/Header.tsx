import React from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyles';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>To Do List</Text>
    </View>
  );
};

export default Header;
