import { View, Button, Text } from 'react-native';
import InputItem from '../../components/InputItem/InputItem';
import React, { useState } from 'react';
import { Formik } from 'formik';
import CheckBoxItem from '../../components/CheckBoxItem/CheckBoxItem';
import styles from './TodoCreatePageStyles';
import TodoService from '../../services/todo.service';
import { TodoT } from '../../types/types';
import {
  useMutation,
} from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { queryClient } from '../../components/Navigation/Navigate';
import { TodoValidator } from '../../validation/todoValidation';
import { QUERY__TODOS__KEY, TODO__PAGE } from '../../constants/constants';
import { defaultYear } from '../../common/currentYear';

const TodoCreatePage = () => {
  const navigation = useNavigation();
  const [publicStatus, setPublicStatus] = useState<boolean>(false);
  const [completedStatus, setCompletedStatus] = useState<boolean>(false);

  const FormInitialValues = {
    title: '',
    description: '',
    year: defaultYear,
  };

  const { mutate: postTodo } = useMutation(
      async (todo: TodoT) => {
        return await TodoService.postTodo({ url: 'todos', data: todo });
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY__TODOS__KEY);
        },
      },
  );

  const postTodoDate = async (todo:TodoT) => {
    try {
      postTodo(todo);
    } catch (e) {
      console.log((e));
    }
  };

  return (
    <View >
      <Formik
        initialValues={FormInitialValues}
        validationSchema={TodoValidator}
        onSubmit={(values) => {
          postTodoDate({
            ...values,
            isCompleted: completedStatus,
            isPublic: publicStatus,
          });
          navigation.navigate(TODO__PAGE);
        }}
      >
        {({ handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }: any) => (
          <View style={styles.container}>
            <View><Text style={styles.mainText}>Create new Todo</Text></View>
            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.title}
              itemName={'title'}
              textAreaStatus={false}
              error={errors.title}
              touched={touched.title} />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.description}
              itemName={'description'}
              textAreaStatus={true}
              error={errors.description}
              touched={touched.description} />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.year}
              itemName={'year'}
              textAreaStatus={false}
              error={errors.year}
              touched={touched.year} />


            <CheckBoxItem
              title={'Public'}
              status={publicStatus}
              setStatus={setPublicStatus}
            />

            <CheckBoxItem
              title={'Completed'}
              status={completedStatus}
              setStatus={setCompletedStatus}
            />

            <View style={styles.btn} >
              <Button onPress={handleSubmit} title="Create" />
            </View>
          </View>
        )
        }
      </Formik >
    </View >
  );
};

export default TodoCreatePage;
