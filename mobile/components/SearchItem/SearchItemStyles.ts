import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  input: {
    width: '30%',
    height: 40,
    margin: THEME.inputitem.input.margin,
    borderWidth: 2,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: THEME.inputitem.container.marginTop,
  },
});

export default styles;
