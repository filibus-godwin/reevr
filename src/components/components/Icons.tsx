import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FontPro from 'react-native-vector-icons/FontAwesome5';
import MaterialIconGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import FontGlyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import FontProGlyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIconGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import {IconProps} from 'react-native-vector-icons/Icon';
import {getIconColor, withTheme} from '../constants/Themes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme} from '../type';

type Props<GlyphMap> = Omit<IconProps, 'name'> & {name: keyof GlyphMap};

export const MaterialIcons: React.FC<
  Props<typeof MaterialIconGlyphMap>
> = props => {
  return (
    <>
      <MaterialIcon {...props} />
    </>
  );
};
export const ThemedMaterialIcons: React.FC<
  Props<typeof MaterialIconGlyphMap> & {theme?: Theme}
> = ({theme, color, size, ...props}) => {
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme);
  return (
    <>
      <MaterialIcon {...props} color={color || iconColor} size={size || 24} />
    </>
  );
};

export const MaterialCommunityIcons: React.FC<
  Props<typeof MaterialCommunityIconGlyphMap>
> = props => {
  return (
    <>
      <MaterialCommunityIcon {...props} />
    </>
  );
};

export const ThemedMaterialCommunityIcons: React.FC<
  Props<typeof MaterialCommunityIconGlyphMap> & {theme?: Theme}
> = ({color, theme, size, ...props}) => {
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme);
  return (
    <>
      <MaterialCommunityIcons
        {...props}
        color={color || iconColor}
        size={size || 24}
      />
    </>
  );
};

export const FontIcons: React.FC<Props<typeof FontGlyphMap>> = props => {
  return (
    <>
      <FontIcon {...props} />
    </>
  );
};

export const ThemedFontIcons: React.FC<
  Props<typeof FontGlyphMap> & {theme?: Theme}
> = ({color, theme, size, ...props}) => {
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme);
  return (
    <>
      <FontIcons {...props} color={color || iconColor} size={size || 24} />
    </>
  );
};

export const FontIconsPro: React.FC<Props<typeof FontProGlyphMap>> = props => {
  return (
    <>
      <FontPro {...props} />
    </>
  );
};
export const ThemedFontIconsPro: React.FC<
  Props<typeof FontProGlyphMap> & {theme?: Theme}
> = ({color, theme, size, ...props}) => {
  const mode = useColorScheme();
  const iconColor = getIconColor(mode, theme);
  return (
    <>
      <FontIconsPro {...props} color={color || iconColor} size={size || 24} />
    </>
  );
};
