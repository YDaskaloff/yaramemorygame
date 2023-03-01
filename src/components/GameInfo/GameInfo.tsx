import React from 'react';
import {Text, View} from 'react-native';

import {GameInfoType} from './types';
import styles from './styles';

const GameInfo: GameInfoType = ({value, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default GameInfo;
