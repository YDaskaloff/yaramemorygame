import {
  DifficultyCards,
  DifficultyColumns,
} from '@models/constants/difficulties';

export enum Difficulties {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const difficultyCards: DifficultyCards = {
  [Difficulties.Easy]: 4,
  [Difficulties.Medium]: 6,
  [Difficulties.Hard]: 8,
};

export const difficultyColumns: DifficultyColumns = {
  [Difficulties.Easy]: 2,
  [Difficulties.Medium]: 3,
  [Difficulties.Hard]: 4,
};
