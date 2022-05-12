import React from 'react';
import {StyleSheet, Text as NativeText, View} from 'react-native';
import Color from 'color';
import {Scheme} from '../type';
import {useTheme} from '../hooks/useTheme';
import {dark, light, withTheme} from '../constants/Themes';
import Animated from 'react-native-reanimated';
import _ParsedText from 'react-native-parsed-text';

type props = React.ComponentProps<typeof Animated.Text> & {
  theme?: {dark: Partial<Scheme>; light: Partial<Scheme>};
};

export const Title: React.FC<props> = ({children, style, theme, ...props}) => {
  const {
    colors: {},
  } = useTheme();

  const {
    colors: {text},
  } = withTheme({
    light: {...light, ...theme?.light},
    dark: {...dark, ...theme?.dark},
  });
  return (
    <>
      <Text
        {...props}
        style={[
          {
            color: Color(text).alpha(0.7).toString(),
            fontWeight: '600',
            fontSize: 16,
          },
          style,
        ]}>
        {children}
      </Text>
    </>
  );
};

export const Body: React.FC<props> = ({children, style, ...props}) => {
  const {
    colors: {text},
  } = useTheme();

  {
    /** fontSize 14 fontWeight 400 opacity 0.54 */
  }
  return (
    <>
      <Text
        {...props}
        style={[
          {
            color: Color(text).alpha(0.7).toString(),
            fontSize: 13.6,
            // fontWeight: '400',
          },
          style,
        ]}>
        {children}
      </Text>
    </>
  );
};

export const Info: React.FC<props> = ({children, style, ...props}) => {
  const {
    colors: {text},
  } = useTheme();
  return (
    <>
      <Text
        {...props}
        style={[
          {color: Color(text).alpha(0.4).toString(), fontWeight: '400'},
          style,
        ]}>
        {children}
      </Text>
    </>
  );
};

export const Text: React.FC<props> = ({children, style, ...props}) => {
  const {
    colors: {text},
  } = useTheme();
  return (
    <>
      <Animated.Text {...props} style={[style]}>
        {children}
      </Animated.Text>
    </>
  );
};

type ParsedProps = React.ComponentProps<typeof _ParsedText>;

export const ParsedText: React.FC<ParsedProps> = ({
  children,
  style,
  ...props
}) => {
  const {
    colors: {text},
  } = useTheme();

  {
    /** fontSize 14 fontWeight 400 opacity 0.5 */
  }
  return (
    <>
      <_ParsedText
        {...props}
        style={[
          {
            color: Color(text).alpha(0.54).toString(),
            fontSize: 13.6,
            // fontWeight: '400',
          },
          style,
        ]}>
        {children}
      </_ParsedText>
    </>
  );
};
