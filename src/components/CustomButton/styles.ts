import {StyleSheet} from 'react-native';

import {normalize} from '@utils/styleUtils';

export default StyleSheet.create({
  button: {
    width: normalize(150),
    paddingVertical: normalize(5),
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: normalize(2),
    backgroundColor: '#fff',
    elevation: 10,
  },
  buttonTitle: {
    fontSize: normalize(25),
    fontWeight: '900',
  },
});
