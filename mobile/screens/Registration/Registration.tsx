import React from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';
import styles from './../Login/LoginStyles';
import InputItem from '../../components/InputItem/InputItem';
import { RegistrationValidator } from '../../validation/todoValidation';
import { useNavigation } from '@react-navigation/native';
import { UserT } from '../../types/types';
import authService from '../../services/user.service';
import { useMutation } from 'react-query';
import { SUCCESS__REGISTRATION } from '../../constants/constants';

const Registration: React.FC<{}> = () => {
  const navigation = useNavigation();

  const { mutate: register } = useMutation(
      async (user: UserT) => {
        return await authService.authorization(
            { url: 'user/register', data: user },
        );
      },
      {
        onSuccess: () => {
          navigation.navigate(SUCCESS__REGISTRATION);
        },
      },
  );

  const registerUser = async (user: UserT) => {
    try {
      register(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View >
      <Formik
        validationSchema={RegistrationValidator}
        initialValues={{
          username: '',
          email: '',
          password: '',
          verifyPassword: '',
        }}
        onSubmit={(values) => {
          if (values.password === values.verifyPassword) {
            registerUser({ ...values });
          }
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

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.username}
              itemName={'username'}
              textAreaStatus={false}
              error={errors.username}
              touched={touched.username} />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              itemName={'email'}
              textAreaStatus={false}
              error={errors.email}
              touched={touched.email} />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              itemName={'password'}
              textAreaStatus={false}
              error={errors.password}
              touched={touched.password} />

            <InputItem
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.verifyPassword}
              itemName={'verifyPassword'}
              textAreaStatus={false}
              error={errors.verifyPassword}
              touched={touched.verifyPassword} />

            <View style={styles.btn}>
              <Button onPress={handleSubmit} title="Registration" />
            </View>
          </View>
        )
        }
      </Formik >
    </View >
  );
};

export default Registration;
