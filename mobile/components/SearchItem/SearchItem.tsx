import { View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './SearchItemStyles';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TODO__PAGE } from '../../constants/constants';
import { StackActions } from '@react-navigation/native';

const SearchItem = () => {
  const navigation = useNavigation();

  const [isPublic, setPublic] = useState<boolean>(false);
  const [isPrivate, setPrivate] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('all');

  const FormInitialValues = {
    titleFilter: '',
    status,
  };
  const statusSwitch = (publicS: boolean) => {
    setPublic(publicS);
    setPrivate(!publicS);
publicS ? setStatus('public') : setStatus('private');
  };

  return (
    <Formik
      initialValues={FormInitialValues}
      onSubmit={(values) => {
        const filter = { ...values, status };
        navigation.dispatch(StackActions.push(TODO__PAGE, filter));
      }}
    >
      {({ handleChange,
        handleBlur,
        handleSubmit,
        values,
      }: any) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('titleFilter')}
            onBlur={handleBlur('titleFilter')}
            value={values.titleFilter}
          />

          <CheckBox
            title={'Public'}
            checked={isPublic}
            onPress={() => statusSwitch(true)}
          />

          <CheckBox
            title={'Private'}
            checked={isPrivate}
            onPress={() => statusSwitch(false)}
          />

          <View >
            <Button onPress={handleSubmit} title="Search" />
          </View>
        </View>
      )
      }
    </Formik >
  );
};

export default SearchItem;
