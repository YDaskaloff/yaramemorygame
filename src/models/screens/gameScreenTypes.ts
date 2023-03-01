import {Dispatch, FC, SetStateAction} from 'react';

import {Difficulties} from '@utils/constants/difficulties';

export type GameScreenType = FC;

export type UseGameScreenReturnType = {
  isStarted: boolean;
  startGame: () => void;
  difficulty: Difficulties | null;
  setDifficulty: Dispatch<SetStateAction<Difficulties | null>>;
  resetGame: () => void;
};

export type UseGameScreenType = () => UseGameScreenReturnType;
