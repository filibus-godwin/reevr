import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {useTheme} from '../hooks/useTheme';
import {Image} from './Themed';

type TouchableImageProps = React.ComponentProps<typeof TouchableOpacity> & {
  contentContainerStyle?: ViewStyle;
  imageProps: FastImageProps;
};

export const TouchableImage: React.FC<TouchableImageProps> = ({
  style,
  contentContainerStyle,
  imageProps,
  activeOpacity,
  ...props
}) => {
  const {
    //  elevated
  } = useTheme();
  const {style: imStyle, ...imProps} = imageProps;
  return (
    <>
      <TouchableOpacity
        activeOpacity={activeOpacity || 0.8}
        style={[style, {}]}
        {...props}>
        <Image
          style={[
            {
              flex: 1,
              // backgroundColor: elevated,
            },
            imStyle,
          ]}
          {...imProps}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
