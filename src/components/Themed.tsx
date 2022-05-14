import Color from 'color';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import {ViewProps} from 'react-native';
import {withTheme} from '../constants/schemes';
import {useColorScheme} from '../hooks/useColorScheme';
import {useTheme} from '../hooks/useTheme';
import {Theme} from '../types';
import {Circle} from 'react-native-progress';
import {Ionicon, MaterialCommunityIcons, MaterialIcons} from './Icons';

const defaultIconSize = 24;

export const BaseContainer: React.FC<ViewProps> = ({style, ...props}) => {
  const {background} = useTheme();
  return (
    <Animated.View style={[{backgroundColor: background}, style]} {...props} />
  );
};
export const ElevatedContainer: React.FC<
  ViewProps & {theme?: Theme; transparent?: boolean}
> = ({style, theme, transparent, ...props}) => {
  const isDark = useColorScheme() == 'dark';
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const backgroundColor = isDark
    ? Color(onBackground).darken(0.9).toString()
    : Color(onBackground).alpha(0.06).toString();
  return (
    <Animated.View
      style={[
        {backgroundColor: transparent ? 'transparent' : backgroundColor},
        style,
      ]}
      {...props}
    />
  );
};

export const ThemedMaterialCommunityIcons: React.FC<
  React.ComponentProps<typeof MaterialCommunityIcons> & {
    theme?: Theme;
    loading?: boolean;
  }
> = ({color, theme, size, loading, ...props}) => {
  const isDark = useColorScheme() == 'dark';
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const iconColor = isDark
    ? Color(onBackground).alpha(0.7).toString()
    : Color(onBackground).toString();
  return (
    <>
      {!loading ? (
        <MaterialCommunityIcons
          color={color || iconColor}
          size={size || defaultIconSize}
          {...props}
        />
      ) : (
        <Circle
          indeterminate
          size={size || defaultIconSize}
          borderColor={(color || iconColor) as string}
        />
      )}
    </>
  );
};

export const ThemedMaterialIcons: React.FC<
  React.ComponentProps<typeof MaterialIcons> & {
    theme?: Theme;
    loading?: boolean;
  }
> = ({color, theme, size, loading, ...props}) => {
  const isDark = useColorScheme() == 'dark';
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const iconColor = isDark
    ? Color(onBackground).alpha(0.7).toString()
    : Color(onBackground).toString();
  return (
    <>
      {!loading ? (
        <MaterialIcons
          color={color || iconColor}
          size={size || defaultIconSize}
          {...props}
        />
      ) : (
        <Circle
          indeterminate
          size={size || defaultIconSize}
          borderColor={(color || iconColor) as string}
        />
      )}
    </>
  );
};

export const ThemedIonicon: React.FC<
  React.ComponentProps<typeof Ionicon> & {theme?: Theme; loading?: boolean}
> = ({color, theme, size, loading, ...props}) => {
  const isDark = useColorScheme() == 'dark';
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const iconColor = isDark
    ? Color(onBackground).alpha(0.7).toString()
    : Color(onBackground).alpha(0.7).toString();
  return (
    <>
      {!loading ? (
        <Ionicon
          color={color || iconColor}
          {...props}
          size={size || defaultIconSize}
        />
      ) : (
        <Circle
          indeterminate
          size={size || defaultIconSize}
          borderColor={(color || iconColor) as string}
        />
      )}
    </>
  );
};
type Props = React.ComponentProps<typeof FastImage> & {theme?: Theme};

export const Image: React.FC<Props> = ({theme, style, ...props}) => {
  const isDark = useColorScheme() == 'dark';
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const backgroundColor = isDark
    ? Color(onBackground).darken(0.9).toString()
    : Color(onBackground).alpha(0.06).toString();
  return (
    <>
      <FastImage {...props} style={[{backgroundColor}, style]} />
    </>
  );
};
