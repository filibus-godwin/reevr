import React from 'react';
import {ImageStyle, StyleProp, View, ViewStyle} from 'react-native';
import {VoidFunction} from '../../types';
import {Spacer} from '../Spacer';
import {TouchableImage} from '../TouchableImage';
// import Video from 'react-native-video';
import {FastImageProps} from 'react-native-fast-image';
import {useTheme} from '../../hooks/useTheme';
import {useAppDimensions} from '../../constants/dim';

type Media = {
  mimeType: 'image/png' | 'video/mp4';
  uri: string;
};

type Props = {
  media?: Media[];
  style?: StyleProp<ViewStyle>;
  onPressImage: VoidFunction;
  onLongPressImage?: VoidFunction;
  radius?: number;
};

export const MessageMedia: React.FC<Props> = ({
  media,
  style,
  radius,
  onLongPressImage,
  onPressImage,
}) => {
  if (media == undefined) return null;
  const {roundness} = useAppDimensions();
  return (
    <>
      <View style={[style]}>
        {media.length == 1 &&
          getComponentByType(
            radius || roundness,
            0,
            1,
            media[0].mimeType,
            media[0].uri,
            onPressImage,
            onLongPressImage,
          )}
        {media.length == 2 && (
          <View style={{flexDirection: 'row', flex: 1}}>
            {getComponentByType(
              radius || roundness,
              0,
              2,
              media[0].mimeType,
              media[0].uri,
              onPressImage,
              onLongPressImage,
            )}
            <Spacer width={2} />
            {getComponentByType(
              radius || roundness,
              1,
              2,
              media[0].mimeType,
              media[1].uri,
              onPressImage,
              onLongPressImage,
            )}
          </View>
        )}
        {media.length == 3 && (
          <View style={{flexDirection: 'row', flex: 1}}>
            {getComponentByType(
              radius || roundness,
              0,
              3,
              media[0].mimeType,
              media[0].uri,
              onPressImage,
              onLongPressImage,
            )}
            <Spacer width={2} />
            <View style={{width: '50%'}}>
              {getComponentByType(
                radius || roundness,
                1,
                3,
                media[0].mimeType,
                media[1].uri,
                onPressImage,
                onLongPressImage,
              )}
              <Spacer height={2} />
              {getComponentByType(
                radius || roundness,
                2,
                3,
                media[0].mimeType,
                media[2].uri,
                onPressImage,
                onLongPressImage,
              )}
            </View>
          </View>
        )}
        {media.length > 3 && (
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1}}>
              {getComponentByType(
                radius || roundness,
                0,
                4,
                media[0].mimeType,
                media[0].uri,
                onPressImage,
                onLongPressImage,
              )}
              <Spacer height={2} />
              {getComponentByType(
                radius || roundness,
                2,
                4,
                media[0].mimeType,
                media[1].uri,
                onPressImage,
                onLongPressImage,
              )}
            </View>
            <Spacer width={2} />
            <View style={{width: '50%'}}>
              {getComponentByType(
                radius || roundness,
                1,
                4,
                media[0].mimeType,
                media[2].uri,
                onPressImage,
                onLongPressImage,
              )}
              <Spacer height={2} />
              {getComponentByType(
                radius || roundness,
                3,
                4,
                media[0].mimeType,
                media[3].uri,
                onPressImage,
                onLongPressImage,
              )}
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const getComponentByType = (
  radius: number,
  index: number,
  length: number,
  type: 'image/png' | 'video/mp4',
  uri: string,
  onPressImage: VoidFunction,
  onLongPressImage?: VoidFunction,
) => {
  const style = getStyleByIndex(index, length, radius);
  if (type == 'image/png')
    return (
      <TouchableImage
        containerStyle={{flex: 1}}
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

  if (index == 0 && length >= 4) {
    return {
      borderTopRightRadius: 0,
      borderTopLeftRadius: radius,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    };
  }
  if (index == 2 && length >= 4) {
    return {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: radius,
    };
  }

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
