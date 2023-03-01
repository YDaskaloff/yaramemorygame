import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

const resetIconSize = normalize(35);

export default StyleSheet.create({
  container: {
    padding: normalize(5),
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: normalize(1.5),
    backgroundColor: '#d9d9d9',
  },
  image: {
    width: resetIconSize,
    height: resetIconSize,
    resizeMode: 'cover',
  },
});
