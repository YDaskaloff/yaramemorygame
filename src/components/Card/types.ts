import {FC} from 'react';

import {GameCard} from '@models/constants/card';
import {Difficulties} from '@utils/constants/difficulties';

type CardProps = {
  card: GameCard;
  difficulty: Difficulties;
  onFlip: (card: GameCard) => void;
  flippedState: any;
  flipPair: GameCard[];
  canFlip: boolean;
};

export type CardType = FC<CardProps>;

type UseCardProps = Omit<CardProps, 'canFlip' | 'difficulty'>;

type UseCardReturnType = {
  isFlipped: boolean;
  flipHandler: () => void;
};

export type UseCardType = ({}: UseCardProps) => UseCardReturnType;
