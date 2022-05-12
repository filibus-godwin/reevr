import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {useColorScheme} from '../hooks/useColorScheme';

// TODO Fix different opacities showing on device dark mode

export const ThemedContainer: React.FC<
  React.ComponentProps<typeof Animated.View>
> = ({children, style, ...props}) => {
  const mode = useColorScheme();
  const backgroundColor =
    mode == 'dark' ? `rgba(200,200,200,${0.2})` : `rgba(0,0,0,${0.09})`;
  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor,
          },
          style,
        ]}
        {...props}>
        {children}
      </Animated.View>
    </>
  );
};
