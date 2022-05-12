import {useColorScheme} from '../hooks/useColorScheme';
import {ColorSchemeType, Theme} from '../types';
import Color from 'color';

export const darkScheme: ColorSchemeType = {
  background: '#000', //#121212 #090909 #060606
  primary: '#ef9d10',
  surface: `rgba(200,200,200,${0.2})`,
  secondary: '#1E61EE', // Signal #1E61EE Instagram #0597F2 Custom #4682b4
  onPrimary: '#fff',
  onBackground: '#eee', //#ffffed
  onSecondary: '#fff',
  onSurface: '#999',
  warning: '#ff0000',
  text: '#fff',
  // elevated: `rgba(200,200,200,${0.2})`,
};

export const lightScheme: ColorSchemeType = {
  background: '#fff',
  primary: '#ef9d10',
  surface: `rgba(0,0,0,${0.09})`,
  secondary: '#1E61EE',
  onPrimary: '#fff',
  onBackground: '#000',
  onSecondary: '#fff',
  onSurface: '#999',
  warning: '#ff0000',
  text: '#000',
  // elevated: `rgba(0,0,0,${0.09})`,
};

export const withTheme = (theme?: Theme) => {
  const isDark = useColorScheme() == 'dark';

  const iTheme: Theme = {
    light: {...lightScheme, ...theme?.light},
    dark: {...darkScheme, ...theme?.dark},
  };

  return isDark ? iTheme.dark : iTheme.light;
};

export const getTextInputTextColor = (theme?: Theme) => {
  const mode = useColorScheme();
  const {onBackground} = withTheme(theme || {light: {}, dark: {}});
  const iconColor =
    mode == 'dark'
      ? Color(onBackground).alpha(0.8).rgb().toString()
      : Color(onBackground).alpha(0.7).rgb().toString();
  return iconColor;
};

export const getIconColor = (mode: string, theme?: Theme) => {
  const {onBackground} = withTheme(theme);
  const iconColor =
    mode == 'dark'
      ? Color(onBackground).alpha(0.8).rgb().toString()
      : Color(onBackground).alpha(0.7).rgb().toString();
  return iconColor;
};
