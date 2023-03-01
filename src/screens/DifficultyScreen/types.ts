import {FC} from 'react';

import {UseGameScreenReturnType} from '@models/screens/gameScreenTypes';

type DifficultyScreenProps = Pick<UseGameScreenReturnType, 'setDifficulty'>;

export type DifficultyScreenType = FC<DifficultyScreenProps>;
