import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import {vs, ms} from 'react-native-size-matters';

type Props = Pick<ViewStyle, 'flex' | 'width' | 'height'>;

export const Spacer: React.FC<Props> = ({flex, width, height}) => {
  const scaledWidth = typeof width == 'number' ? ms(width) : width;
  const scaledHeight = typeof height == 'number' ? vs(height) : height;
  return (
    <View
      style={{
        display: 'flex',
        width: scaledWidth,
        height: scaledHeight,
        flex,
      }}></View>
  );
};


