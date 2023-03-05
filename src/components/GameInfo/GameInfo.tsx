import React from 'react';
import {View} from 'react-native';

import TextCustom from '@components/TextCustom/TextCustom';

import {GameInfoType} from './types';
import styles from './styles';

const GameInfo: GameInfoType = ({value, title}) => {
  return (
    <View style={styles.container}>
      <TextCustom style={styles.value}>{value}</TextCustom>
      <TextCustom>{title}</TextCustom>
    </View>
  );
};

export default GameInfo;
