import {FC} from 'react';

import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';
import {Difficulties} from '@utils/constants/difficulties';
import {GameCard} from '@models/constants/card';

export type FlippedState = {[key: string]: boolean};

type PlayScreenProps = Pick<UseGameScreenReturnType, 'resetGame'> & {
  difficulty: Difficulties;
};

export type PlayScreenType = FC<PlayScreenProps>;

type UsePlayScreenProps = Pick<PlayScreenProps, 'difficulty'>;

export type UsePlayScreenReturnType = {
  isVictory: boolean;
  score: number;
  matrix: GameCard[][];
  canFlip: boolean;
  onFlip: (card: GameCard) => void;
  flipPair: GameCard[];
  flippedState: FlippedState;
};

export type UsePlayScreenType =
  ({}: UsePlayScreenProps) => UsePlayScreenReturnType;
