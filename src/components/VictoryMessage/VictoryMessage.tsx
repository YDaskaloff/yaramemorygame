import React from 'react';
import {View} from 'react-native';

import ResetButton from '@components/ResetButton/ResetButton';
import TextCustom from '@components/TextCustom/TextCustom';

import styles from './styles';
import {VictoryMessageType} from './types';

const VictoryMessage: VictoryMessageType = ({score, resetGame}) => {
  return (
    <View style={styles.victoryContainer}>
      <TextCustom style={styles.victoryText}>Victory!!!</TextCustom>
      <View style={styles.scoreContainer}>
        <TextCustom style={styles.finalScoreTitle}>You scored:</TextCustom>
        <TextCustom style={styles.victoryText}>{score} Points</TextCustom>
      </View>
      <View style={styles.scoreContainer}>
        <ResetButton onPress={resetGame} />
        <TextCustom style={styles.newGameText}>New Game</TextCustom>
      </View>
    </View>
  );
};

export default VictoryMessage;
