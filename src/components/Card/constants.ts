import {Difficulties} from '@utils/constants/difficulties';

import styles from './styles';

export const difficultyStyle = {
  [Difficulties.Easy]: styles.easy,
  [Difficulties.Medium]: styles.medium,
  [Difficulties.Hard]: styles.hard,
};
