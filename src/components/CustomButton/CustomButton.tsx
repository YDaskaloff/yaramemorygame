import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {CustomButtonType} from '@models/components/buttonTypes';

import styles from './styles';

const CustomButton: CustomButtonType = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
