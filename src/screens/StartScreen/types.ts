import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';
import {FC} from 'react';

type StartScreenProps = Pick<UseGameScreenReturnType, 'startGame'>;

export type StartScreenType = FC<StartScreenProps>;
