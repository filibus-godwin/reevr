import React from 'react';
import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {MediaAsset, VoidFunction} from '../../types';
import {Spacer} from '../Spacer';
import {TouchableImage} from '../TouchableImage';
// import Video from 'react-native-video';
import {FastImageProps} from 'react-native-fast-image';
import {useAppDimensions} from '../../constants/dim';

type Props = {
  media?: MediaAsset[];
  style?: StyleProp<ViewStyle>;
  onPressImage: VoidFunction;
  onLongPressImage?: VoidFunction;
  radius?: number;
};

export const TileMedia: React.FC<Props> = ({
  media,
  style,
  radius,
  onLongPressImage,
  onPressImage,
}) => {
  const {aspectRatio: ar, ...styles} = StyleSheet.flatten(style);
  if (media == undefined) return null;
  const aspectRatio = media.length > 0 ? ar : undefined;
  const {roundness} = useAppDimensions();

  return (
    <>
      {/* <Spacer height={10} /> */}
      <View style={[styles, {aspectRatio}]}>
        {media.length == 1 &&
          getComponentByType({
            radius: radius || roundness,
            index: 0,
            length: 1,
            type: media[0].type,
            uri: media[0].uri,
            onPressImage,
            onLongPressImage,
          })}
        {media.length == 2 && (
          <View style={{flexDirection: 'row', flex: 1}}>
            {getComponentByType({
              radius: radius || roundness,
              index: 0,
              length: 2,
              type: media[0].type,
              uri: media[0].uri,
              onPressImage,
              onLongPressImage,
            })}
            <Spacer width={2} />
            {getComponentByType({
              radius: radius || roundness,
              index: 1,
              length: 2,
              type: media[0].type,
              uri: media[1].uri,
              onPressImage,
              onLongPressImage,
            })}
          </View>
        )}
        {media.length >= 3 && (
          <View style={{flexDirection: 'row', flex: 1}}>
            {getComponentByType({
              radius: radius || roundness,
              index: 0,
              length: 4,
              type: media[0].type,
              uri: media[0].uri,
              onPressImage,
              onLongPressImage,
            })}
            <Spacer width={2} />
            <View style={{width: '40%'}}>
              {getComponentByType({
                radius: radius || roundness,
                index: 1,
                length: 4,
                type: media[0].type,
                uri: media[1].uri,
                onPressImage,
                onLongPressImage,
              })}
              <Spacer height={2} />
              {getComponentByType({
                radius: radius || roundness,
                index: 2,
                length: 4,
                type: media[0].type,
                uri: media[2].uri,
                onPressImage,
                onLongPressImage,
              })}
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const getComponentByType = ({
  index,
  length,
  onPressImage,
  radius,
  uri,
  onLongPressImage,
  type,
}: {
  radius: number;
  index: number;
  length: number;
  uri?: string;
  onPressImage: VoidFunction;
  onLongPressImage?: VoidFunction;
  type?: string;
}) => {
  const style = getStyleByIndex(index, length, radius);
  if (type?.startsWith('image'))
    return (
      <TouchableImage
        activeOpacity={1}
        imageProps={{
          source: {
            uri,
            priority: 'high',
          },
          style: [{flex: 1}, style],
        }}
        onPress={onPressImage}
        onLongPress={onLongPressImage}
        style={{flex: 1}}
        contentContainerStyle={style as ViewStyle}
        containerStyle={{flex: 1}}
      />
    );

  return (
    <></>
    // <Video
    //   source={require('../../assets/videos/prod.mp4')}
    //   resizeMode="cover"
    //   style={[{flex: 1}, getStyleByIndex(0, 1, radius)]}
    // />
  );
};

const getStyleByIndex = (
  index: number,
  length: number,
  radius: number,
): FastImageProps['style'] => {
  // const radius = 5;
  if (index == 0 && length == 1) {
    return {
      borderTopRightRadius: radius,
      borderTopLeftRadius: radius,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: radius,
    };
  } else if (index == 0 && length > 1) {
    return {
      borderTopRightRadius: 0,
      borderTopLeftRadius: radius,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: radius,
    };
  }

  if (index == 1 && length == 2) {
    return {
      borderTopRightRadius: radius,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: radius,
      borderBottomLeftRadius: 0,
    };
  } else if (index == 1 && length > 2) {
    return {
      borderTopRightRadius: radius,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    };
  }

  const style = {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: 0,
  };

  return style;
};
