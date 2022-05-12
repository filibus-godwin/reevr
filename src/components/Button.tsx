import Color from 'color';
import React from 'react';
import {CircleSnail} from 'react-native-progress';
import {StyleProp, View, ViewStyle, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useAppDimensions} from '../constants/dim';
import {withTheme} from '../constants/schemes';
import {Theme} from '../types';
import {Row} from './Layout';

type Props = React.ComponentProps<typeof TouchableHighlight> & {
  mode?: 'contained' | 'outlined' | 'text';
  text?: string;
  uppercase?: boolean;
  theme?: Theme;
  loading?: boolean;
};

export const Button: React.FC<Props> = ({
  text,
  mode,
  uppercase,
  theme,
  style,
  loading,
  ...props
}) => {
  const transformedText =
    uppercase == true || uppercase == undefined ? text?.toUpperCase() : text;

  const {primary} = withTheme({
    light: {...theme?.light},
    dark: {...theme?.dark},
  });

  const {roundness} = useAppDimensions();

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
          <Row style={{alignItems: 'center'}}>
            {loading && (
              <CircleSnail
                size={15}
                indeterminate={true}
                thickness={1}
                style={{marginRight: 10}}
                duration={400}
                color={primary}
              />
            )}
            <Text
              style={[{letterSpacing: 0.4, color: textColor}]}
              numberOfLines={1}>
              {transformedText}
            </Text>
          </Row>
        </TouchableHighlight>
      </View>
    </>
  );
};

const outlined: (roundness: number, primary?: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderWidth: 0.6,
  borderColor: primary || '#ddd',
  borderRadius: roundness || 0,
});
const getTextStyle: (roundness: number, primary?: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderRadius: roundness || 0,
});
const contained: (roundness: number, primary?: string) => ViewStyle = (
  roundness,
  primary,
) => ({
  borderRadius: roundness || 0,
  backgroundColor: primary,
});
