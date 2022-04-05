import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { Formik } from 'formik';
import styles from './LoginStyles';
import InputItem from '../../components/InputItem/InputItem';
import { LoginValidator } from '../../validation/todoValidation';
import { TODO__PAGE } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserT } from '../../types/types';
import authService from '../../services/user.service';
import { useMutation } from 'react-query';

const Login: React.FC<{}> = () => {
  const navigation = useNavigation();
  const [loginError, setLoginError] = useState<any>();

  const tokenStore = async (value: string) => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      console.log(e);
    }
  };

  const { mutate: login } = useMutation(
      async (user: UserT) => {
        return await authService.authorization(
            { url: 'user/login', data: user },
        );
      },
      {
        onSuccess: (res) => {
          if (res.data.token) {
            tokenStore(res.data.token);
            navigation.navigate(TODO__PAGE);
          } else {
            setLoginError('Password or email are wrong');
          }
        },
      },
  );

  function loginUser(userData: UserT) {
    try {
      login(userData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View >
      <Formik
        validationSchema={LoginValidator}
        initialValues={{ email: 'wdwd@gmail.com', password: '12345' }}
        onSubmit={(values) => {
          loginUser({ ...values });
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
            <View>
              {loginError ?
<Text style={styles.error}>{loginError}</Text> :
null}
            </View>
            <View style={styles.btn}>
              <Button onPress={handleSubmit} title="Login" />
            </View>
          </View>
        )
        }
      </Formik >
    </View >
  );
};

export default Login;
