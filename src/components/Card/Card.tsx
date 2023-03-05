import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';

import {CardType} from './types';
import styles from './styles';
import {difficultyStyle} from './constants';
import {useCard} from './useCard';

const Card: CardType = ({
  difficulty,
  onFlip,
  flippedState,
  flipPair,
  card,
  canFlip,
}) => {
  const {isFlipped, flipHandler} = useCard({
    onFlip,
    flippedState,
    flipPair,
    card,
  });

  return (
    <TouchableWithoutFeedback onPress={canFlip ? flipHandler : undefined}>
      <View style={[styles.card, difficultyStyle[difficulty]]}>
        <View>
          {isFlipped ? (
            <Image
              source={card.image}
              style={[styles.image, difficultyStyle[difficulty]]}
            />
          ) : (
            <Text style={styles.placeholder}>?</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
