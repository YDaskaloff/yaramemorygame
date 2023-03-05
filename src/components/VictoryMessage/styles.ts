import {StyleSheet} from 'react-native';

import {normalize, windowHeight} from '@utils/styleUtils';

export default StyleSheet.create({
  victoryContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: windowHeight * 0.25,
    alignItems: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  victoryText: {
    fontSize: normalize(30),
    fontWeight: '900',
  },
  finalScoreTitle: {
    fontSize: normalize(22),
    fontWeight: '600',
  },
  newGameText: {
    fontWeight: '600',
    fontSize: normalize(16),
    marginTop: normalize(8),
  },
});
