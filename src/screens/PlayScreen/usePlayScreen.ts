import {useEffect, useRef, useState} from 'react';

import {GameCard} from '@models/constants/card';
import {difficultyCards} from '@utils/constants/difficulties';
import {getMatrix} from '@utils/helpers/matrixBuilders';

import {FlippedState, UsePlayScreenType} from './types';

export const usePlayScreen: UsePlayScreenType = ({difficulty}) => {
  const [matrix, setMatrix] = useState<GameCard[][]>([]);
  const [flippedState, setFlippedState] = useState<FlippedState>({});
  const [flipPair, setFlipPair] = useState<GameCard[]>([]);
  const [canFlip, setCanFlip] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [isVictory, setIsVictory] = useState<boolean>(false);

  const flipBackTimeout = useRef<ReturnType<typeof setTimeout>>();
  const victoryTimeout = useRef<ReturnType<typeof setTimeout>>();

  const addToScore = () => {
    setScore(prev => prev + 20);
  };

  const subtractFromScore = () => {
    setScore(prev => (prev > 0 ? prev - 10 : prev));
  };

  const onFlip = (card: GameCard) => {
    if (flipPair[0]) {
      // // Allow user to keep tapping away after not finding a match
      // if (flipPair.length === 2) {
      //   setFlipPair([card]);
      //   flipBackTimeout.current && clearTimeout(flipBackTimeout.current);
      //   subtractFromScore();
      //   return;
      // }
      if (flipPair[0].value === card.value) {
        setFlippedState(prev => ({
          ...prev,
          [flipPair[0].position]: true,
          [card.position]: true,
        }));
        if (
          Object.keys(flippedState).length + 2 ===
          difficultyCards[difficulty] * 2
        ) {
          victoryTimeout.current = setTimeout(() => setIsVictory(true), 2000);
        }
        setFlipPair([]);
        addToScore();
      } else {
        setCanFlip(false);
        setFlipPair(prev => [...prev, card]);
        flipBackTimeout.current = setTimeout(() => {
          setCanFlip(true);
          setFlipPair([]);
          subtractFromScore();
        }, 2000);
      }
    } else {
      setFlipPair([card]);
    }
  };

  useEffect(() => {
    setMatrix(getMatrix(difficulty));

    return () => {
      flipBackTimeout.current && clearTimeout(flipBackTimeout.current);
      victoryTimeout.current && clearTimeout(victoryTimeout.current);
    };
  }, [difficulty]);

  return {isVictory, score, matrix, canFlip, onFlip, flipPair, flippedState};
};
