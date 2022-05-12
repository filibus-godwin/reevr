import Color from 'color';
import React from 'react';
import {TouchableHighlight} from 'react-native';
import {getIconColor, withTheme} from '../constants/Themes';
import {useColorScheme} from '../hooks/useColorScheme';
import { Theme } from '../type';
import {MaterialIcons} from './Icons';

type Props = React.ComponentProps<typeof TouchableHighlight> &
  Pick<React.ComponentProps<typeof MaterialIcons>, 'name' | 'size' | 'color'> & {
      theme? : Theme
  }

export const IconButton: React.FC<
  Props
> = ({size, style, color, name, underlayColor: uColor, theme, ...props}) => {
  const dim = (size || 24) * 1.5;
  const {
    colors: {text, onBackground, background},
  } = withTheme(theme);
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme)

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
        <MaterialIcons  name={name} size={size || 24} color={color || iconColor} />
      </TouchableHighlight>
    </>
  );
};
