import {ImageSourcePropType} from 'react-native';

export type CardBase = {
  value: string;
  image: ImageSourcePropType;
};

export type GameCard = CardBase & {
  position: string;
};
