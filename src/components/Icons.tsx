import React from 'react';
import MaterialIconsRaw from 'react-native-vector-icons/MaterialIcons';
import EntypoIconsRaw from 'react-native-vector-icons/Entypo';
import IoniconsRaw from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsRaw from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsGlyph from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import EntypoIconsGlyph from 'react-native-vector-icons/glyphmaps/Entypo.json';
import IoniconsGlyph from 'react-native-vector-icons/glyphmaps/Ionicons.json';
import MaterialCommunityIconsGlyph from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

type MaterialCommunityIconProps = {
  name: keyof typeof MaterialCommunityIconsGlyph;
} & Omit<React.ComponentProps<typeof MaterialCommunityIconsRaw>, 'name'>;

export const MaterialCommunityIcons: React.FC<
  MaterialCommunityIconProps
> = props => {
  return <MaterialCommunityIconsRaw {...props} />;
};

type MaterialIconProps = {
  name: keyof typeof MaterialIconsGlyph;
} & Omit<React.ComponentProps<typeof MaterialIconsRaw>, 'name'>;

export const MaterialIcons: React.FC<MaterialIconProps> = props => {
  return <MaterialIconsRaw {...props} />;
};

type EntypoIconProps = {
  name: keyof typeof EntypoIconsGlyph;
} & Omit<React.ComponentProps<typeof EntypoIconsRaw>, 'name'>;

export const EntypoIcon: React.FC<EntypoIconProps> = props => {
  return <EntypoIconsRaw {...props} />;
};

type IoniconsProps = {
  name: keyof typeof IoniconsGlyph;
} & Omit<React.ComponentProps<typeof IoniconsRaw>, 'name'>;

export const Ionicon: React.FC<IoniconsProps> = props => {
  return <IoniconsRaw {...props} />;
};
