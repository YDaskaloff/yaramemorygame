import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

export default StyleSheet.create({
  gameInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: normalize(35),
    justifyContent: 'space-between',
    position: 'absolute',
    top: normalize(20),
  },
  row: {
    flexDirection: 'row',
  },
});
