import {CardBase, GameCard} from '@models/constants/card';
import {cards} from '@utils/constants/cards';
import {
  Difficulties,
  difficultyCards,
  difficultyColumns,
} from '@utils/constants/difficulties';
import {matrixRows} from '@utils/constants/matrix';

const shuffleCards = (array: CardBase[]): CardBase[] => {
  return array
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};

const getGameCards = (diff: Difficulties) => {
  const shuffledCards = shuffleCards(cards);

  const cardsToUse = [...Array(difficultyCards[diff])].map(() =>
    shuffledCards.pop(),
  );

  // // We're working with hardcoded constants here so we can be sure that map will return what we need;
  return shuffleCards([...cardsToUse, ...cardsToUse] as CardBase[]);
};

export const getMatrix = (diff: Difficulties) => {
  const gameCards = getGameCards(diff);

  const matrix = [...Array(difficultyColumns[diff])].map((_c, columnIndex) => {
    return [...Array(matrixRows)].map<GameCard>((_r, rowIndex) => ({
      ...(gameCards.pop() as GameCard),
      position: `${columnIndex}_${rowIndex}`,
    }));
  });

  return matrix as GameCard[][];
};
