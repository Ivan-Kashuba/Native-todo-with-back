import { THEME } from './../../constants/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    marginTop: THEME.createpage.mainText.marginTop,
    fontWeight: 'bold',
    fontSize: THEME.createpage.mainText.fontSize,
  },
  btn: {
    marginTop: THEME.createpage.btn.marginTop,
    width: '80%',
  },
});

export default styles;
