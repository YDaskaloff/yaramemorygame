import React from 'react';
import {Animated, Image, Pressable} from 'react-native';

import TextCustom from '@components/TextCustom/TextCustom';

import {CardType} from './types';
import styles from './styles';
import {difficultyStyle} from './constants';
import {useCard} from './useCard';
import {useFlipAnimation} from './useFlipAnimation';

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
    canFlip,
  });
  const {flipToFrontStyle, flipToBackStyle} = useFlipAnimation({isFlipped});

  return (
    <Pressable onPress={isFlipped ? undefined : flipHandler}>
      <Animated.View
        style={[
          styles.card,
          styles.placeholderContainer,
          difficultyStyle[difficulty],
          styles.cardFront,
          flipToFrontStyle,
        ]}>
        <TextCustom style={styles.placeholder}>?</TextCustom>
      </Animated.View>
      <Animated.View style={[styles.card, styles.cardBack, flipToBackStyle]}>
        <Image
          source={card.image}
          style={[styles.image, difficultyStyle[difficulty]]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default Card;
