import Color from 'color';
import React from 'react';
import {Pressable, StyleSheet, View, ViewProps} from 'react-native';
import {withTheme} from '../constants/Themes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme, VoidFunction} from '../type';
import {IconButton} from './IconButton';

type Props = {
  onClose: VoidFunction;
  hidePressable?: boolean;
  theme?: Theme;
} & ViewProps;

export const BottomSheet: React.FC<Props> = ({
  onClose,
  hidePressable,
  children,
  theme,
  ...props
}) => {
  const {
    colors: {surface, background},
  } = withTheme(theme);
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark
    ? Color('#fff').darken(0.91).rgb().toString()
    : Color('#fff').darken(0.1).rgb().toString();
  return (
    <>
      {!hidePressable && (
        <Pressable
          onPress={onClose}
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}
        />
      )}
      <View {...props} style={{backgroundColor}}>
        <IconButton name="close" onPress={onClose} />
        {children}
      </View>
    </>
  );
};
