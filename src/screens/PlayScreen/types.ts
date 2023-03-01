import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';
import {FC} from 'react';

type PlayScreenProps = Pick<
  UseGameScreenReturnType,
  'resetGame' | 'difficulty'
>;

export type PlayScreenType = FC<PlayScreenProps>;
