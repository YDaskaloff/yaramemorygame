import {FC} from 'react';
import {ViewStyle} from 'react-native';

type GameInfoProps = {
  value: string;
  title: string;
  style?: ViewStyle;
};

export type GameInfoType = FC<GameInfoProps>;
