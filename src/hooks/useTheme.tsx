import React from 'react';
import {darkScheme, lightScheme} from '../constants/schemes';
import {useColorScheme} from './useColorScheme';

export const useTheme = () => {
  const isDark = useColorScheme() == 'dark';
  return isDark ? darkScheme : lightScheme;
};
