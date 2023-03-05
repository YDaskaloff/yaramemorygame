import React from 'react';
import {View} from 'react-native';

import commonStyles from '@styles/commonStyles';
import GameInfo from '@components/GameInfo/GameInfo';
import ResetButton from '@components/ResetButton/ResetButton';
import {GameCard} from '@models/constants/card';
import Card from '@components/Card/Card';
import VictoryMessage from '@components/VictoryMessage/VictoryMessage';
import {PlayScreenType} from '@models/screens/playScreenTypes';

import styles from './styles';
import {usePlayScreen} from './usePlayScreen';

const PlayScreen: PlayScreenType = ({resetGame, difficulty}) => {
  const {isVictory, score, matrix, canFlip, onFlip, flipPair, flippedState} =
    usePlayScreen({difficulty});

  return (
    <View style={commonStyles.screenContent}>
      {isVictory ? (
        <VictoryMessage score={score} resetGame={resetGame} />
      ) : (
        <>
          <View style={styles.gameInfoContainer}>
            <GameInfo value={difficulty} title="Difficulty" />
            <ResetButton onPress={resetGame} />
            <GameInfo value={score.toString()} title="Score" />
          </View>
          <View style={styles.row}>
            {matrix.map((column, index) => {
              return (
                <View key={index.toString()}>
                  {(column as GameCard[]).map(card => {
                    return (
                      <Card
                        key={card.position}
                        card={card}
                        difficulty={difficulty}
                        onFlip={onFlip}
                        flippedState={flippedState}
                        flipPair={flipPair}
                        canFlip={canFlip}
                      />
                    );
                  })}
                </View>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};

export default PlayScreen;
