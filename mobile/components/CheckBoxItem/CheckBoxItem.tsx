import { View } from 'react-native';
import React, { SetStateAction, Dispatch } from 'react';
import { CheckBox } from 'react-native-elements';
import styles from './CheckBoxItemStyle';

interface iProps {
title: string;
status: boolean;
setStatus: Dispatch<SetStateAction<boolean>>
}

const CheckBoxItem = ({
  title, status, setStatus,
}: iProps) => {
  return (
    <View style={styles.checkBox}>
      <CheckBox
        title={title}
        checked={status}
        onPress={() => setStatus(!status)}
      />
    </View >
  );
};

export default CheckBoxItem;
