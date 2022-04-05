import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 25,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: THEME.todoitem.icon.fontSize,
    marginLeft: THEME.todoitem.icon.marginLeft,
  },
  icons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: THEME.todoitem.title.fontSize,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
  },
  year: {
    marginLeft: THEME.todoitem.year.marginLeft,
    alignItems: 'center',
    fontSize: THEME.todoitem.year.fontSize,
    fontWeight: 'bold',
  },
  status: {
    flexDirection: 'row',
  },
  coma: {
    marginRight: THEME.todoitem.coma.marginRight,
  },
});

export default styles;
