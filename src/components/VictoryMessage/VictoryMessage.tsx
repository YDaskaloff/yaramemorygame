import React from 'react';
import {Text, View} from 'react-native';

import ResetButton from '@components/ResetButton/ResetButton';

import styles from './styles';
import {VictoryMessageType} from './types';

const VictoryMessage: VictoryMessageType = ({score, resetGame}) => {
  return (
    <View style={styles.victoryContainer}>
      <Text style={styles.victoryText}>Victory!!!</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.finalScoreTitle}>You scored:</Text>
        <Text style={styles.victoryText}>{score} Points</Text>
      </View>
      <View style={styles.scoreContainer}>
        <ResetButton onPress={resetGame} />
        <Text style={styles.newGameText}>New Game</Text>
      </View>
    </View>
  );
};

export default VictoryMessage;
