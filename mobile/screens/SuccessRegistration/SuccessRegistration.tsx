import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/constants';
import styles from './SuccessRegistrationStyles';

const SuccessRegistration = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Success Registration</Text>
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate(LOGIN)}
      >Login
      </Text>
    </View>
  );
};

export default SuccessRegistration;
