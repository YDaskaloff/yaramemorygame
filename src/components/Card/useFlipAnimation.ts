import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {UseFlipAnimationType} from './types';

export const useFlipAnimation: UseFlipAnimationType = ({isFlipped}) => {
  const isInitialLoad = useRef(true);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const flipToBackStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipToBack = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const flipToFront = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    isFlipped ? flipToBack() : flipToFront();
  }, [isFlipped, flipToBack, flipToFront, isInitialLoad]);

  return {flipToFrontStyle, flipToBackStyle};
};
