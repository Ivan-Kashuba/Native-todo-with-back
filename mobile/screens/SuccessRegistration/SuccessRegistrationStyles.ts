import { THEME } from './../../constants/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
  loginText: {
    fontSize: THEME.successregistration.loginText.fontSize,
    textDecorationLine: 'underline',
    color: THEME.successregistration.loginText.color,
  },
});

export default styles;
