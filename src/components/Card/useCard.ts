import {UseCardType} from './types';

export const useCard: UseCardType = ({
  onFlip,
  flippedState,
  flipPair,
  card,
}) => {
  const isFlipped =
    flippedState[card.position] ||
    flipPair.some(curCard => curCard.position === card.position);

  const flipHandler = () => {
    onFlip(card);
  };

  return {isFlipped, flipHandler};
};
