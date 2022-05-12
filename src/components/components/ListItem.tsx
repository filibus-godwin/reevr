import Color from 'color';
import React, {Touch} from 'react';
import {StyleSheet, Text,  View} from 'react-native';
import {Switch, TouchableHighlight} from 'react-native-gesture-handler';
import {withTheme} from '../constants/Themes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme} from '../type';
import {Spacer} from './Spacer';
import {Body, Title} from './Text';
import {ToggleButton} from './ToggleButton';
import { Touchable } from './Touchable';

type Props = {
  title: string;
  theme?: Theme;
  left?: () => React.ReactNode;
} & React.ComponentProps<typeof TouchableHighlight>;

export const ListItem: React.FC<Props> = ({
  title,
  theme,
  children,
  underlayColor: uColor,
  style,
  left,
  ...props
}) => {
  const {
    colors: {onBackground},
  } = withTheme(theme);
  const mode = useColorScheme();
  const underlayColor =
    uColor || mode == 'dark'
      ? Color(onBackground).alpha(0.1).rgb().toString()
      : onBackground;
  return (
    <>
      <Touchable
        style={[styles.base, style]}
        // underlayColor={uColor || underlayColor}
        {...props}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Body style={{fontSize: 17}}>{title}</Body>
          <Spacer flex={1} />
          {left && left()}
        </View>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 19,
  },
});
