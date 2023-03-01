import commonStyles from '@styles/commonStyles';
import React from 'react';
import {Text, View} from 'react-native';

import GameInfo from '@components/GameInfo/GameInfo';
import ResetButton from '@components/ResetButton/ResetButton';
import {Difficulties} from '@utils/constants/difficulties';

import {PlayScreenType} from './types';
import styles from './styles';

const PlayScreen: PlayScreenType = ({resetGame, difficulty}) => {
  return (
    <View style={commonStyles.screenContent}>
      <View style={styles.gameInfoContainer}>
        {/* PlayScreen cannot be accessed of Difficulty is null */}
        <GameInfo value={difficulty as Difficulties} title="Difficulty" />
        <ResetButton onPress={resetGame} />
        <GameInfo value="20" title="Score" />
      </View>
      <Text>PLAY</Text>
    </View>
  );
};

export default PlayScreen;
