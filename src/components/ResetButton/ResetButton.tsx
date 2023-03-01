import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {ResetButtonType} from './types';

const ResetButton: ResetButtonType = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('@images/assets/reset.png')}
      />
    </TouchableOpacity>
  );
};

export default ResetButton;
