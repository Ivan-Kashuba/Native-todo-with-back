import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  textArea: {
    width: '80%',
    height: 40,
    margin: THEME.inputitem.textArea.margin,
    borderWidth: 2,
    padding: 10,
    minHeight: 100,
  },
  input: {
    width: '80%',
    height: 40,
    margin: THEME.inputitem.input.margin,
    borderWidth: 2,
    padding: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: THEME.inputitem.container.marginTop,
  },
  text: {
    fontSize: THEME.inputitem.text.fontSize,
  },
  error: {
    color: THEME.inputitem.error.color,
    alignSelf: 'flex-start',
    marginLeft: THEME.inputitem.error.marginLeft,
  },
});

export default styles;
