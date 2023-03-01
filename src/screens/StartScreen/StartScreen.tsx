import React from 'react';
import {Image, View} from 'react-native';

import CustomButton from '@components/CustomButton/CustomButton';
import commonStyles from '@styles/commonStyles';

import styles from './styles';
import {StartScreenType} from './types';

const StartScreen: StartScreenType = ({startGame}) => {
  return (
    <View style={commonStyles.screenContent}>
      <Image
        style={styles.yaraLogo}
        source={require('@images/tileImages/09_YaraPrideLogo.png')}
      />
      <CustomButton title="START" onPress={startGame} />
    </View>
  );
};

export default StartScreen;
