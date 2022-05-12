import React from 'react';
import Color from 'color';
import {Text} from 'react-native';
import {useColorScheme} from '../hooks/useColorScheme';
import {useTheme} from '../hooks/useTheme';
import Animated from 'react-native-reanimated';
import ParsedText from 'react-native-parsed-text';

export const Title: React.FC<React.ComponentProps<typeof Animated.Text>> = ({
  style,
  ...props
}) => {
  const isDark = useColorScheme() == 'dark';
  const {text} = useTheme();
  const color = isDark
    ? Color(text).alpha(0.8).toString()
    : Color(text).alpha(0.7).toString();
  return (
    <Animated.Text
      style={[{color, fontWeight: '600', fontSize: 16}, style]}
      {...props}
    />
  );
};

export const SubTitle: React.FC<React.ComponentProps<typeof Text>> = ({
  style,
  ...props
}) => {
  return <Text style={[{}, style]} {...props} />;
};

export const Body: React.FC<React.ComponentProps<typeof Text>> = ({
  style,
  ...props
}) => {
  const isDark = useColorScheme() == 'dark';
  const {text} = useTheme();
  const color = isDark
    ? Color(text).alpha(0.7).toString()
    : Color(text).alpha(0.7).toString();
  return <Text style={[{color, fontSize: 13.6}, style]} {...props} />;
};

export const Info: React.FC<React.ComponentProps<typeof ParsedText>> = ({
  style,
  ...props
}) => {
  const isDark = useColorScheme() == 'dark';
  const {text} = useTheme();
  const color = isDark
    ? Color(text).alpha(0.4).rgb().toString()
    : Color(text).alpha(0.4).rgb().toString();
  return <ParsedText style={[{fontWeight: '400', color}, style]} {...props} />;
};
