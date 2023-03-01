import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';
import {FC} from 'react';

type DifficultyScreenProps = Pick<UseGameScreenReturnType, 'setDifficulty'>;

export type DifficultyScreenType = FC<DifficultyScreenProps>;
