import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomButtonType} from '@models/components/buttonTypes';
import TextCustom from '@components/TextCustom/TextCustom';

import styles from './styles';

const CustomButton: CustomButtonType = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <TextCustom style={styles.buttonTitle}>{title}</TextCustom>
    </TouchableOpacity>
  );
};

export default CustomButton;
