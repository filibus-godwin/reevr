import React from 'react';
import {View, ViewProps} from 'react-native';

export const Row: React.FC<ViewProps> = ({style, ...props}) => {
  return <View style={[{flexDirection: 'row'}, style]} {...props} />;
};

export const Column: React.FC<ViewProps> = ({...props}) => {
  return <View {...props} />;
};
