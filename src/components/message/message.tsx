import Color from 'color';
import React from 'react';
import {ColorValue, View, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useColorScheme} from '../../hooks/useColorScheme';
import {useTheme} from '../../hooks/useTheme';
import {MessageType} from '../../types';
import {Column} from '../Layout';
import {Spacer} from '../Spacer';
import {Swipeable} from '../Swipeable';
import {ThemedMaterialCommunityIcons} from '../Themed';
import {Touchable} from '../Touchable';
import {File} from './file';
import {Media} from './media';
import {Reply} from './reply';
import {Text} from './text';

type Props = React.ComponentProps<typeof Touchable> & MessageType;

export const Message: React.FC<Props> = ({
  name,
  style,
  left,
  timestamp,
  previousMessageSenderId,
  nextMessageSenderId,
  senderId,
  messageId,
  onPressCaption,
  onSwipeableOpen,
  content,
  isReply,
  selected,
  ...props
}) => {
  const {secondary, background, onBackground} = useTheme();

  const pressed = useSharedValue(false);

  const position = getPosition(
    senderId,
    nextMessageSenderId,
    previousMessageSenderId,
  );
  const wrapperStyle = getStyle(position, 20, left);
  const mode = useColorScheme();

  const bg = mode == 'dark' ? 'rgba(200,200,200,0.16)' : 'rgba(20,20,20,0.13)';
  let backgroundColor = left ? bg : (secondary as ColorValue);
  const pressedColor = Color(backgroundColor)
    .darken(0.3)
    .rgb()
    .toString() as ColorValue;

  const leftTextColor = mode == 'dark' ? '#ddd' : '#444';
  const rightTextColor = '#fff';
  const textColor = left ? leftTextColor : rightTextColor;

  const selectedColor =
    mode == 'dark'
      ? Color(onBackground).darken(0.8).rgb().toString()
      : Color(onBackground).alpha(0.3).rgb().toString();

  const onPressIn = () => {
    pressed.value = true;
  };
  const onPressOut = () => {
    pressed.value = false;
  };

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? pressedColor : backgroundColor,
    };
  });

  return (
    <>
      <Touchable
        style={[{backgroundColor: selected ? selectedColor : 'transparent'}]}
        underlayColor={'transparent'}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={0.2}
        {...props}>
        <Swipeable
          onThresholdReached={onSwipeableOpen}
          renderLeftAction={() => (
            <ThemedMaterialCommunityIcons name="reply" />
          )}>
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: left ? 'row' : 'row-reverse',
              marginBottom: 2,
              alignItems: 'center',
            }}
            {...props}>
            <Animated.View
              style={[
                {
                  alignItems: left ? 'flex-start' : 'flex-end',
                  maxWidth: 300,
                  backgroundColor,
                  ...wrapperStyle,
                },
                backgroundStyle,
              ]}>
              <Column style={{marginVertical: 5, marginHorizontal: 5}}>
                {isReply && (
                  <Reply
                    onPress={onPressCaption}
                    style={{marginTop: 1, marginBottom: 8}}
                    sender={name}
                    media={content.replyMedia}
                    text={content.replyText}
                    left={left}
                  />
                )}
                <View
                  style={{
                    paddingHorizontal: isReply ? 5 : 0,
                  }}>
                  <File showIcon style={{marginTop: 1}} />
                  <Media {...{media: content.media}} />
                  <Text
                    text={content.text}
                    style={{
                      marginVertical: 2,
                      marginHorizontal: 5,
                      color: textColor,
                    }}
                  />
                </View>
              </Column>
            </Animated.View>
          </View>
        </Swipeable>
      </Touchable>
    </>
  );
};

function getPosition(
  senderId: string,
  nextSenderId: string | undefined,
  previousSenderId: string | undefined,
) {
  if (senderId != previousSenderId && senderId == nextSenderId) return 'top';
  if (senderId != previousSenderId && senderId != nextSenderId) return 'alone';
  if (senderId == previousSenderId && senderId == nextSenderId) return 'middle';
  if (senderId == previousSenderId && senderId == nextSenderId) return 'middle';

  return 'end';
}

function getStyle(
  position: 'alone' | 'top' | 'middle' | 'end',
  radius: number,
  left?: boolean,
): ViewStyle {
  const val = 5;
  const marginBottom = 15;
  if (position == 'alone')
    return {
      borderTopStartRadius: radius,
      borderTopEndRadius: radius,
      borderBottomEndRadius: radius,
      borderBottomStartRadius: radius,
      marginBottom,
    };

  if (position == 'top' && left) {
    return {
      borderTopStartRadius: radius,
      borderTopEndRadius: radius,
      borderBottomEndRadius: radius,
      borderBottomStartRadius: val,
    };
  } else if (position == 'top' && !left) {
    return {
      borderTopEndRadius: radius,
      borderBottomEndRadius: val,
      borderTopStartRadius: radius,
      borderBottomStartRadius: radius,
    };
  }
  if (position == 'middle' && left) {
    return {
      borderTopEndRadius: radius,
      borderBottomEndRadius: radius,
      borderTopStartRadius: val,
      borderBottomStartRadius: val,
    };
  } else if (position == 'middle' && !left) {
    return {
      borderTopEndRadius: val,
      borderBottomEndRadius: val,
      borderTopStartRadius: radius,
      borderBottomStartRadius: radius,
    };
  }
  if (position == 'end' && left) {
    return {
      borderTopEndRadius: radius,
      borderBottomEndRadius: radius,
      borderTopStartRadius: val,
      borderBottomStartRadius: radius,
      marginBottom,
    };
  } else if (position == 'end' && !left) {
    return {
      borderTopEndRadius: val,
      borderBottomEndRadius: radius,
      borderTopStartRadius: radius,
      borderBottomStartRadius: radius,
      marginBottom,
    };
  }

  return {};
}
