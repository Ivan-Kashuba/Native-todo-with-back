import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: '80%',
    margin: THEME.login.btn.margin,
  },

  input: {
    width: '80%',
    height: 40,
    margin: THEME.login.btn.margin,
    borderWidth: 2,
    padding: 10,
  },
  error: {
    color: THEME.login.error.color,
  },
});

export default styles;
