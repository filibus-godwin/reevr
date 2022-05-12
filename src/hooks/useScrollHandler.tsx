import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from './useTheme';

type Args = {};

export const useScrollHandler = (topPadding: number) => {
  const scrollY = useSharedValue(0);
  const {background} = useTheme();

  const appbarBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, topPadding - 91, topPadding - 90],
        ['transparent', 'transparent', background],
      ),
    };
  });

  const appbarContentStyle = useAnimatedStyle<ViewStyle>(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, topPadding - 90, topPadding - 50],
        [0, 0, 1],
      ),
      //   transform: [
      //     {
      //       translateY: interpolate(
      //         scrollY.value,
      //         [0, topPadding],
      //         [100, 0],
      //         Extrapolate.CLAMP,
      //       ),
      //     },
      //   ],
    };
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, topPadding - 90], [1, 0]),
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [0, topPadding / 4],
            [1, 1.2],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            scrollY.value,
            [0, topPadding],
            [0, -topPadding / 4],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const titleStyle = useAnimatedStyle<TextStyle>(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, topPadding - 20],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y}}) => {
      scrollY.value = y;
    },
  });

  return {
    onScroll,
    appbarBackgroundStyle,
    appbarContentStyle,
    imageStyle,
    titleStyle,
  };
};
