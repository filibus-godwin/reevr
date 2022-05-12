import React from 'react';
import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';
import {useStore} from '../store/store';

export const useColorScheme = () => {
  const mode = useStore(state => state.mode);
  const systemScheme = _useColorScheme() as NonNullable<ColorSchemeName>;
  if (mode == 'light') return 'light';
  if (mode == 'dark') return 'dark';
  return systemScheme;
};
