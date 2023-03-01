import React from 'react';
import {Text, View} from 'react-native';

import StartScreen from '@screens/StartScreen/StartScreen';
import commonStyles from '@styles/commonStyles';
import DifficultyScreen from '@screens/DifficultyScreen/DifficultyScreen';
import {GameScreenType} from '@models/screens/gameScreenTypes';

import styles from './styles';
import useGameScreen from './useGameScreen';
import PlayScreen from '@screens/PlayScreen/PlayScreen';

const GameScreen: GameScreenType = () => {
  const {isStarted, startGame, difficulty, setDifficulty, resetGame} =
    useGameScreen();

  return (
    <>
      <View style={commonStyles.screenTitleContainer}>
        <Text style={styles.screenTitle}>Yara Memory Game</Text>
      </View>
      {!isStarted && <StartScreen startGame={startGame} />}
      {isStarted && !difficulty && (
        <DifficultyScreen setDifficulty={setDifficulty} />
      )}
      {isStarted && difficulty ? (
        <PlayScreen difficulty={difficulty} resetGame={resetGame} />
      ) : null}
    </>
  );
};

export default GameScreen;
