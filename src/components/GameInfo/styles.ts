import {normalize} from '@utils/styleUtils';
import {StyleSheet} from 'react-native';

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
