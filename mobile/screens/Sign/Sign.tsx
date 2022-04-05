import { View, Button } from 'react-native';
import React from 'react';
import styles from './SignStyles';
import { LOGIN, REGISTRATION } from '../../constants/constants';


const Sign = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate(LOGIN)}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate(REGISTRATION)}
        />
      </View>
    </View>
  );
};
export default Sign;


