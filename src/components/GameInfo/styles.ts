import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  value: {
    textTransform: 'uppercase',
    fontSize: normalize(20),
    fontWeight: '800',
  },
});
