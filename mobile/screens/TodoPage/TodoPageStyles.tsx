import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    marginVertical: THEME.todopage.btn.marginVertical,
    width: '60%',
  },
  list: {
    width: '100%',
  },
});

export default styles;
