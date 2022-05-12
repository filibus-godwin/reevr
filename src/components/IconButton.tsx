import Color from 'color';
import React from 'react';
import {TouchableHighlight} from 'react-native';
import {getIconColor, withTheme} from '../constants/schemes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme} from '../types';
import {MaterialIcons} from './Icons';
import {Circle} from 'react-native-progress';
import {ThemedMaterialIcons} from './Themed';

type Props = React.ComponentProps<typeof TouchableHighlight> &
  Pick<
    React.ComponentProps<typeof MaterialIcons>,
    'name' | 'size' | 'color'
  > & {
    theme?: Theme;
    loading?: boolean;
  };

export const IconButton: React.FC<Props> = ({
  size,
  style,
  color,
  name,
  underlayColor: uColor,
  theme,
  loading,
  ...props
}) => {
  const dim = (size || 24) * 1.5;
  const {text, onBackground, background} = withTheme(theme);
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme);

  const underlayColor =
    uColor || mode == 'dark'
      ? Color(onBackground).alpha(0.1).rgb().toString()
      : Color(onBackground).alpha(0.1).rgb().toString();
  return (
    <>
      <TouchableHighlight
        {...props}
        underlayColor={underlayColor}
        hitSlop={{top: 2, left: 2, bottom: 2, right: 2}}
        style={[
          {
            width: dim,
            height: dim,
            margin: 6,
            borderRadius: dim / 2,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
          style,
        ]}>
        <ThemedMaterialIcons
          name={name}
          size={size || 24}
          color={color || iconColor}
          loading={loading}
        />
      </TouchableHighlight>
    </>
  );
};
