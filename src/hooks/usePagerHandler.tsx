import Color from 'color';
import {TextStyle} from 'react-native';
import {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useTheme} from './useTheme';

export const usePagerHandler = ({
  position,
  offset,
  numberOfChildren,
  tabWidths,
}: {
  position: SharedValue<number>;
  offset: SharedValue<number>;
  numberOfChildren: number;
  tabWidths: number[];
}) => {
  const {primary, onBackground} = useTheme();
  const red = Color(onBackground).alpha(0.25).toString();
  const yellow = Color(primary).darken(0).toString();
  const textStyles: TextStyle[] = [];
  const prev = useSharedValue(0);
  const xPos = getXPos(numberOfChildren, tabWidths);
  const text = getTextInputArray(numberOfChildren);

  const sliderStyle = useAnimatedStyle(() => {
    processOffset(offset, prev);
    return {
      transform: [
        {
          translateX: interpolate(
            prev.value + position.value,
            new Array(numberOfChildren).fill(0).map((_, index) => index),
            xPos,
          ),
        },
      ],
      width: interpolate(
        prev.value + position.value,
        new Array(numberOfChildren).fill(0).map((_, index) => index),
        tabWidths,
      ),
    };
  });
  for (let i = 0; i < numberOfChildren; i++) {
    // @ts-ignore
    const textStyle = useAnimatedStyle<TextStyle>(() => {
      return {
        color: interpolateColor(
          position.value + offset.value,
          text[i],
          [red, yellow, red],
          'RGB',
        ),
      };
    });
    textStyles.push(textStyle);
  }

  return {sliderStyle, textStyles};
};

const processOffset = (
  offset: SharedValue<number>,
  prev: SharedValue<number>,
) => {
  'worklet';
  if (offset.value == 0 && prev.value >= 0.9) {
    prev.value = 0;
    return;
  }
  prev.value = offset.value;
};

const getXPos = (numberOfChildren: number, tabWidths: number[]) => {
  const arr: number[] = [0];
  for (let i = 1; i < numberOfChildren; i++) {
    arr.push(arr[i - 1] + tabWidths[i - 1] + 30);
  }
  return arr;
};
// const getWidths = (numberOfChildren: number, tabWidths: number[]) => {
//   const arr: number[] = [0];
//   for (let i = 1; i < numberOfChildren; i++) {
//     arr.push(arr[i - 1] + tabWidths[i - 1] + 30);
//   }
//   return arr;
// };

const getTextInputArray = (numberOfChildren: number) => {
  const arr: number[][] = [[1, 0, 1]];
  for (let i = 1; i < numberOfChildren; i++) {
    arr.push([i - 1, i, i + 1]);
  }
  return arr;
};
