import {FC} from 'react';

import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';

type VictoryMessageProps = Pick<UseGameScreenReturnType, 'resetGame'> & {
  score: number;
};

export type VictoryMessageType = FC<VictoryMessageProps>;
