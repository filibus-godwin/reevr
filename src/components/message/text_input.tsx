import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, ViewProps} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {getTextInputTextColor} from '../../constants/schemes';
import {MediaType, VoidFunction} from '../../types';
import {IconButton} from '../IconButton';
import {BaseContainer} from '../Themed';
import {Reply} from './reply';

type Props = ViewProps & {
  text?: string;
  media?: MediaType;
  sender?: string;
  isReplying?: boolean;
  onClose?: VoidFunction;
};

export const ConversationTextInput: React.FC<Props> = ({
  style,
  text,
  media,
  sender,
  isReplying,
  onClose,
  ...props
}) => {
  const textColor = getTextInputTextColor();

  return (
    <>
      <View style={[{}, style]} {...props}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          <View
            collapsable={false}
            style={{
              flexDirection: 'row',
              paddingHorizontal: 0,
              flex: 1,
              //   backgroundColor: 'transparent',
              alignItems: 'flex-end',
            }}>
            <IconButton name="emoji-emotions" />
            <BaseContainer
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.2)',

                paddingVertical: 10,
                borderRadius: 20,
                paddingHorizontal: 10,
                marginVertical: 5,
              }}>
              {isReplying && (
                <Reply
                  style={{
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                  }}
                  {...{sender, text, media: media, closeable: true, onClose}}
                />
              )}
              <TextInput
                style={{
                  color: textColor,
                  flex: 1,
                  fontSize: 14,
                  padding: 0,
                  paddingVertical: isReplying ? 5 : 0,
                }}
                selectionColor={textColor}
                placeholder="leave a message"
                placeholderTextColor={'#999'}
                multiline
              />
            </BaseContainer>
            <IconButton name="send" />
          </View>
        </View>
      </View>
    </>
  );
};
