import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '../hooks/useTheme';

export const ThemedView: React.FC<
  React.ComponentProps<typeof Animated.View>
> = ({style, ...props}) => {
  const {
    colors: {background},
  } = useTheme();
  return (
    <>
      <Animated.View
        style={[{backgroundColor: background}, style]}
        {...props}></Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
