import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {TouchableImage} from './TouchableImage';

type Props = React.ComponentProps<typeof TouchableImage> & {size?: number};

export const CircleAvatar: React.FC<Props> = ({size, imageProps, ...props}) => {
  const dim = size || 30;
  const {source, style, ...imProps} = imageProps;
  const {
    colors: {elevated},
  } = useTheme();
  return (
    <>
      <TouchableImage
        {...props}
        imageProps={{
          source,
          style: [
            {
              width: dim,
              height: dim,
              borderRadius: dim / 2,
              backgroundColor: elevated,
            },
            style,
          ],
          ...imProps,
        }}
        style={{
          width: dim,
          height: dim,
        }}
      />
    </>
  );
};
