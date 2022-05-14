import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {VoidFunction} from '../types';

type Props = {
  onThresholdReached?: VoidFunction;
  swipeableOpenedThreshold?: number;
  renderLeftAction?: () => React.ReactNode;
};

export const Swipeable: React.FC<Props> = ({
  onThresholdReached,
  swipeableOpenedThreshold,
  renderLeftAction,
  children,
}) => {
  const {width} = Dimensions.get('screen');
  const transX = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transX.value,
            [0, width],
            [0, swipeableOpenedThreshold || 200],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  
  const leftActionstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transX.value,
            [0, 200],
            [-30, 50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {}
  >({
    onFinish: () => {
      transX.value = withSpring(0, {mass: 0.4});
    },
    onActive: ({translationX}) => {
      transX.value = translationX;
    },
    onEnd: ({translationX}) => {
      if (
        onThresholdReached &&
        translationX >= (swipeableOpenedThreshold || 130)
      ) {
        runOnJS(onThresholdReached)();
      }
    },
  });

  return (
    <>
      <Animated.View>
        <PanGestureHandler
          activeOffsetX={[-10, 10]}
          onGestureEvent={gestureHandler}>
          <Animated.View style={{flexDirection: 'row'}}>
            <Animated.View style={[{flex: 1}, style]}>{children}</Animated.View>
          </Animated.View>
        </PanGestureHandler>
        <Animated.View
          style={[
            {
              position: 'absolute',
              zIndex: -10,
              top: 0,
              left: 0,
              right: 0,
              bottom: 12,
              justifyContent: 'center',
            },
          ]}>
          <Animated.View style={leftActionstyle}>
            {renderLeftAction && renderLeftAction()}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
