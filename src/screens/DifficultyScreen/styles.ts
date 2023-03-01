import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

export default StyleSheet.create({
  title: {
    fontSize: normalize(18),
    fontWeight: '600',
    marginBottom: normalize(20),
  },
  button: {
    marginTop: normalize(12),
    width: normalize(200),
  },
});
