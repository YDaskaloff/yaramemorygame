import {FC} from 'react';
import {ViewStyle} from 'react-native';

export type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export type CustomButtonType = FC<CustomButtonProps>;
