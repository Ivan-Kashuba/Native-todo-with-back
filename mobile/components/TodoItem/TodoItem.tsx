import { View, Text } from 'react-native';
import React from 'react';
import styles from './TodoItemStyle';
import { capitalize } from '../../common/firstLetter';
import TodoService from '../../services/todo.service';
import { TodoT } from '../../types/types';
import { useMutation } from 'react-query';
import { queryClient } from '../Navigation/Navigate';
import { useNavigation } from '@react-navigation/native';
import { EDIT__TODO__PAGE, QUERY__TODOS__KEY } from '../../constants/constants';


const TodoItem: React.FC<TodoT> = (
    {
      _id,
      title,
      description,
      isCompleted,
      isPublic,
      year,
    }) => {
  const navigation = useNavigation();

  const { mutate: deleteTodo } = useMutation(
      () => TodoService.deleteTodo({ url: `todos/${navData._id}` }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY__TODOS__KEY);
        },
      },
  );

  const navData = {
    _id,
    title,
    description,
    isCompleted,
    isPublic,
    year,
  };

  const editTodo = () => {
    navigation.navigate(EDIT__TODO__PAGE, navData);
  };

  const deleteTodoDate = async () => {
    try {
      deleteTodo();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>{capitalize(title)}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
        <Text>{description}</Text>
        <View style={styles.status}>
          <Text>{isCompleted ? 'Completed' : 'Non completed'}</Text>
          <Text style={styles.coma}>,</Text>
          <Text>{isPublic ? 'Public' : 'Private'}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <Text style={styles.icon} onPress={editTodo} >&#9998;</Text>
        <Text style={styles.icon} onPress={deleteTodoDate}>&#128465;</Text>
      </View>
    </View>
  );
};

export default TodoItem;
