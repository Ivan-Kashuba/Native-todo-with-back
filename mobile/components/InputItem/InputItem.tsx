import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './InputItemStyles';
import { capitalize } from '../../common/firstLetter';

interface IProps {
handleChange: any
handleBlur: any;
value: string;
itemName: string;
textAreaStatus: boolean,
error: any,
touched: any
}


export default function InputItem({
  handleChange,
  handleBlur,
  value,
  itemName,
  textAreaStatus,
  error,
  touched,
}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{capitalize(itemName)}</Text>
      <TextInput
        style={textAreaStatus ? styles.textArea : styles.input}
        onChangeText={handleChange(itemName)}
        onBlur={handleBlur(itemName)}
        value={value}
      />
      {error && touched ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

