import {FC} from 'react';
import {Animated, ViewStyle} from 'react-native';

import {GameCard} from '@models/constants/card';
import {Difficulties} from '@utils/constants/difficulties';
import {UsePlayScreenReturnType} from '@models/screens/playScreenTypes';

type CardProps = Pick<
  UsePlayScreenReturnType,
  'canFlip' | 'onFlip' | 'flippedState' | 'flipPair'
> & {
  card: GameCard;
  difficulty: Difficulties;
};

export type CardType = FC<CardProps>;

type UseCardProps = Omit<CardProps, 'difficulty'>;

type UseCardReturnType = {
  isFlipped: boolean;
  flipHandler: () => void;
};

export type UseCardType = ({}: UseCardProps) => UseCardReturnType;

type UseFlipAnimationProps = Pick<UseCardReturnType, 'isFlipped'>;

type UseFlipAnimationReturnType = {
  flipToFrontStyle: Animated.AnimatedProps<ViewStyle>;
  flipToBackStyle: Animated.AnimatedProps<ViewStyle>;
};

export type UseFlipAnimationType =
  ({}: UseFlipAnimationProps) => UseFlipAnimationReturnType;
