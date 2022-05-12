import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {MediaType} from '../../types';
import {TileMedia} from '../feed_card/media';
import {MessageMedia} from './media copy';

type Props = {media?: MediaType[]} & ViewProps;

export const Media: React.FC<Props> = ({media, style, ...props}) => {
  if (media == undefined) return null;
  return (
    <>
      <View
        style={[
          styles.base,
          {height: media.length > 1 ? 170 : 320, width: 290},
          style,
        ]}>
        <MessageMedia
          media={media}
          onPressImage={() => {
            console.log('imagePressed');
          }}
          onLongPressImage={() => {
            console.log('onLongPressImage activated');
          }}
          style={{flex: 1}}
          radius={15}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
