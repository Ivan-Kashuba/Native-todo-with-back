import { View, FlatList } from 'react-native';
import React from 'react';
import TodoService from '../../services/todo.service';
import { useQuery } from 'react-query';
import TodoItem from '../../components/TodoItem/TodoItem';
import { Button } from 'react-native-elements';
import styles from './TodoPageStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  CREATE__TODO__PAGE,
  QUERY__TODOS__KEY,
} from '../../constants/constants';
import SearchItem from '../../components/SearchItem/SearchItem';
import { TODO__BASE__URL } from '../../constants/constants';

const TodoPage = () => {
  const navigation = useNavigation();
  const url = TODO__BASE__URL;
  const filterData: any = useRoute().params;

  const response = useQuery(QUERY__TODOS__KEY, () => {
    return TodoService.getAllTodos({ url, data: filterData });
  });

  const todos = response.data;

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          title='Create new Todo'
          onPress={() => navigation.navigate(CREATE__TODO__PAGE)}
        />
      </View>
      <SearchItem />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <TodoItem
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
              isPublic={item.isPublic}
              year={item.year}
              _id={item._id} />;
          }}
          keyExtractor={(item): any => item._id}
        />
      </View>
    </View>);
};

export default TodoPage;
