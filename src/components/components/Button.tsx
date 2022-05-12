import Color from 'color';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {withTheme} from '../constants/Themes';
import {Theme} from '../type';
import {Text} from './Text';

type Props = React.ComponentProps<typeof TouchableHighlight> & {
  mode?: 'contained' | 'outlined' | 'text';
  text?: string;
  uppercase?: boolean;
  theme?: Theme;
};

export const Button: React.FC<Props> = ({
  text,
  mode,
  uppercase,
  theme,
  style,
  ...props
}) => {
  const transformedText =
    uppercase == true || uppercase == undefined ? text?.toUpperCase() : text;

  const {
    roundness,
    colors: {primary},
  } = withTheme({light: {...theme?.light}, dark: {...theme?.dark}});

  const outlinedStyle = mode == 'outlined' ? outlined(roundness, primary) : {};
  const textStyle = mode == 'text' ? getTextStyle(roundness, primary) : {};
  const containedStyle =
    mode == 'contained' ? contained(roundness, primary) : {};

  const base: StyleProp<ViewStyle> = [
    {
      overflow: 'hidden',
      ...outlinedStyle,
      ...textStyle,
      ...containedStyle,
    },
  ];

  const textColor =
    mode == 'contained' ? Color(primary).darken(0.6).rgb().toString() : primary;

  const underlayColor =
    mode == 'contained'
      ? Color(primary).darken(0.3).rgb().toString()
      : Color(primary).lighten(0.3).rgb().toString();

  return (
    <>
      <View
        style={[
          {
            borderRadius: roundness,
            overflow: 'hidden',
          },
          style,
        ]}>
        <TouchableHighlight
          {...props}
          underlayColor={underlayColor}
          style={[
            {
              paddingHorizontal: 16,
              paddingVertical: 9,
              justifyContent: 'center',
              alignItems: 'center',
            },
            base,
          ]}>
          <Text
            style={[{letterSpacing: 0.4, color: textColor}]}
            numberOfLines={1}>
            {transformedText}
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const outlined: (roundness: number, primary: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderWidth: 0.6,
  borderColor: primary || '#ddd',
  borderRadius: roundness || 0,
});
const getTextStyle: (roundness: number, primary: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderRadius: roundness || 0,
});
const contained: (roundness: number, primary: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderRadius: roundness || 0,
  backgroundColor: primary,
});
