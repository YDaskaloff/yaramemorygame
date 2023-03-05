import {StyleSheet} from 'react-native';

import {normalize, windowWidth} from '@utils/styleUtils';

const easySize = windowWidth * 0.3;
const mediumSize = windowWidth * 0.26;
const hardSize = windowWidth * 0.2;

export default StyleSheet.create({
  card: {
    borderColor: '#000',
    borderRadius: normalize(12),
    borderWidth: normalize(1.5),
    overflow: 'hidden',
    margin: normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  easy: {
    width: easySize,
    height: easySize,
  },
  medium: {
    width: mediumSize,
    height: mediumSize,
  },
  hard: {
    width: hardSize,
    height: hardSize,
  },
  placeholder: {
    fontSize: normalize(50),
    fontWeight: '900',
  },
  image: {
    resizeMode: 'cover',
  },
});
