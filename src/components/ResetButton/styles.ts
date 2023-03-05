import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

const resetIconSize = normalize(35);
const containerSize = resetIconSize + normalize(10);

export default StyleSheet.create({
  container: {
    width: containerSize,
    height: containerSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: containerSize / 2,
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
