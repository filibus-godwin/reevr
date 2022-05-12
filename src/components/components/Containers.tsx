import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const Row: React.FC<React.ComponentProps<typeof View>> = ({
  style,
  ...props
}) => {
  return <View style={[{flexDirection: 'row'}, style]} {...props} />;
};
export const Column: React.FC<React.ComponentProps<typeof View>> = ({
  style,
  ...props
}) => {
  return <View style={[{flexDirection: 'column'}, style]} {...props} />;
};
