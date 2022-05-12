import Color from 'color';
import React, {Touch} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {withTheme} from '../constants/Themes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme} from '../type';
import {Body, Title} from './Text';

type Props = {
  theme?: Theme;
} & React.ComponentProps<typeof TouchableHighlight>;

export const Touchable: React.FC<Props> = ({
  theme,
  children,
  underlayColor: uColor,
  style,
  ...props
}) => {
  const {
    colors: {onBackground},
    roundness,
  } = withTheme(theme);
  const mode = useColorScheme();
  const underlayColor =
    mode == 'dark'
      ? Color(onBackground).alpha(0.1).rgb().toString()
      : Color(onBackground).alpha(0.1).rgb().toString();
  return (
    <>
      <TouchableHighlight
        style={[style]}
        underlayColor={uColor || underlayColor}
        {...props}>
        {children}
      </TouchableHighlight>
    </>
  );
};
