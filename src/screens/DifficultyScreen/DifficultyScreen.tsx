import React from 'react';
import {Text, View} from 'react-native';

import commonStyles from '@styles/commonStyles';
import {Difficulties} from '@utils/constants/difficulties';
import CustomButton from '@components/CustomButton/CustomButton';

import {DifficultyScreenType} from './types';
import styles from './styles';

const DifficultyScreen: DifficultyScreenType = ({setDifficulty}) => {
  return (
    <View style={commonStyles.screenContent}>
      <Text style={styles.title}>Select Difficulty</Text>
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
