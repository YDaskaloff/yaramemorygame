import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';

const TextCustom: FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TextCustom;
