import {FC} from 'react';

import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';

type PlayScreenProps = Pick<
  UseGameScreenReturnType,
  'resetGame' | 'difficulty'
>;

export type PlayScreenType = FC<PlayScreenProps>;
