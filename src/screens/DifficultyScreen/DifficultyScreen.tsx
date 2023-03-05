import React from 'react';
import {View} from 'react-native';

import commonStyles from '@styles/commonStyles';
import {Difficulties} from '@utils/constants/difficulties';
import CustomButton from '@components/CustomButton/CustomButton';
import TextCustom from '@components/TextCustom/TextCustom';

import {DifficultyScreenType} from './types';
import styles from './styles';

const DifficultyScreen: DifficultyScreenType = ({setDifficulty}) => {
  return (
    <View style={commonStyles.screenContent}>
      <TextCustom style={styles.title}>Select Difficulty</TextCustom>
      {Object.values(Difficulties).map(difficulty => {
        const onPress = () => {
          setDifficulty(difficulty);
        };
        return (
          <CustomButton
            key={difficulty}
            onPress={onPress}
            title={difficulty.toUpperCase()}
            style={styles.button}
          />
        );
      })}
    </View>
  );
};

export default DifficultyScreen;
