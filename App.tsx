import React from 'react';
import {SafeAreaView} from 'react-native';

import GameScreen from '@screens/GameScreen/GameScreen';
import commonStyles from '@styles/commonStyles';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.appContainer}>
      <GameScreen />
    </SafeAreaView>
  );
};

export default App;
