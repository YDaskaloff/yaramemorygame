import {useState} from 'react';

import {Difficulties} from '@utils/constants/difficulties';
import {UseGameScreenType} from '@models/screens/gameScreenTypes';

const useGameScreen: UseGameScreenType = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<Difficulties | null>(null);

  const startGame = () => {
    setIsStarted(true);
  };

  const resetGame = () => {
    setIsStarted(false);
    setDifficulty(null);
  };

  return {
    isStarted,
    startGame,
    difficulty,
    setDifficulty,
    resetGame,
  };
};

export default useGameScreen;
