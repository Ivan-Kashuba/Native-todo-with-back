import { View, Button, Text } from 'react-native';
import InputItem from '../../components/InputItem/InputItem';
import React, { useState } from 'react';
import { Formik } from 'formik';
import CheckBoxItem from '../../components/CheckBoxItem/CheckBoxItem';
import styles from './../TodoCreatePage/TodoCreatePageStyles';
import TodoService from '../../services/todo.service';
import { TodoT } from '../../types/types';
import {
  useMutation,
} from 'react-query';
import { useNavigation, useRoute } from '@react-navigation/native';
import { queryClient } from '../../components/Navigation/Navigate';
import { TodoValidator } from '../../validation/todoValidation';
import {
  TODO__PAGE,
  QUERY__TODOS__KEY,
} from '../../constants/constants';
import { defaultYear } from '../../common/currentYear';


const TodoEditPage = () => {
  const navigation = useNavigation();
  const navData: any = useRoute().params;
  const [publicStatus, setPublicStatus] =
useState<boolean>(navData.isPublic);
  const [completedStatus, setCompletedStatus] =
useState<boolean>(navData.isCompleted);
  const FormInitialValues = {
    title: navData.title || '',
    description: navData.description || '',
    year: Number(navData.year) || defaultYear,
  };

  const { mutate: editTodo } = useMutation(
      async (todo: TodoT) => {
        return await TodoService.editTodo(
            { url: `todos/${navData._id}`, data: todo },
        );
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY__TODOS__KEY);
        },
      },
  );

  return (
    <View >
      <Formik
        initialValues={FormInitialValues}
        validationSchema={TodoValidator}
        onSubmit={(values) => {
          editTodo({
            ...values,
            isCompleted: completedStatus,
            isPublic: publicStatus,
          });
          navigation.navigate(TODO__PAGE);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }: any) => (
          <View style={styles.container}>
            <View><Text style={styles.mainText}>Edit Todo</Text></View>
            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.title}
              itemName={'title'}
              textAreaStatus={false}
              error={errors.title}
              touched={touched.title}
            />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.description}
              itemName={'description'}
              textAreaStatus={true}
              error={errors.description}
              touched={touched.title}
            />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              itemName={'year'}
              textAreaStatus={false}
              error={errors.year}
              touched={touched.title}
            />


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
              <Button onPress={handleSubmit} title="Edit" />
            </View>
          </View>
        )
        }
      </Formik >
    </View >
  );
};


export default TodoEditPage;
