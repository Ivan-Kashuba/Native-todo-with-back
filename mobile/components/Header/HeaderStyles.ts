import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: THEME.header.viewStyle.backgroundColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    shadowColor: THEME.header.viewStyle.backgroundColor,
  },
  textStyle: {
    color: THEME.header.textStyle.color,
    fontSize: THEME.header.textStyle.fontSize,
  },
});

export default styles;
