import React from 'react';
import {ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FastImageProps} from 'react-native-fast-image';
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
            },
            imStyle,
          ]}
          {...imProps}
        />
      </TouchableOpacity>
    </>
  );
};
