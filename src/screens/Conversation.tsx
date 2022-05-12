import React, {useEffect, useState} from 'react';
import {FlatList, FlatListProps, StyleSheet, ToastAndroid} from 'react-native';
import {Appbar} from '../components/Appbar';
import {CircleAvatar} from '../components/CircleAvatar';
import {Spacer} from '../components/Spacer';
import {Touchable} from '../components/Touchable';
import {ReplyType, RootStackScreenProps} from '../types';
import {Message} from '../components/message/message';
import {ConversationTextInput} from '../components/message/text_input';
import {ConversationData} from '../data/ConversationData';
import {Row} from '../components/Layout';
import {BaseContainer} from '../components/Themed';

/*
 
  reply  behaviours

  when replying a text only message: first two lines of the text is attached to the reply
  when replying a text + image message: first two lines of the text is attached + link to a thumbnail
  when replying a file : filename is attached as text to the reply
  when replying an image only message : the an icon might be attached

 */

export const ConversationScreen: React.FC<
  RootStackScreenProps<'Conversation'>
> = ({navigation, route}) => {
  const [data, setData] = useState<typeof ConversationData[0] | any>();
  useEffect(() => {
    setData(ConversationData);
  }, []);
  const [reply, setReply] = useState<ReplyType>({
    senderId: '',
    messageId: '',
  });

  const [isReplying, setIsReplying] = useState(false);

  const onPressName = () => navigation.navigate('UserProfile', {userId: ''});
  const onPressCaption = () => ToastAndroid.show('Reply', ToastAndroid.SHORT);

  const onClose = () => {
    setIsReplying(false);
    setReply({
      senderId: '',
      messageId: '',
    });
  };

  const renderItem: FlatListProps<
    React.ComponentProps<typeof Message>
  >['renderItem'] = ({item, index}) => {
    const prevIndex = index > 0 && ConversationData.length > 1 ? index - 1 : -1;
    const nextIndex =
      index >= 0 && ConversationData.length - 1 !== index ? index + 1 : -1;

    let g = undefined ?? '';
    return (
      <Message
        onPress={() => {}}
        onLongPress={() => {
          console.log('LongPresses', item);
        }}
        {...item}
        onPressCaption={onPressCaption}
        previousMessageSenderId={
          nextIndex == -1 ? undefined : ConversationData[nextIndex].senderId
        }
        nextMessageSenderId={
          prevIndex == -1 ? undefined : ConversationData[prevIndex].senderId
        }
        onSwipeableOpen={() => {
          setIsReplying(true);
          setReply({
            senderId: 'You',
            messageId: '',
            text: item.content.text,
            media: item.content.media && item.content.media[0],
          });
        }}
      />
    );
  };
  return (
    <>
      <Appbar.Header>
        <Touchable
          onPress={navigation.goBack}
          style={{borderRadius: 20, marginLeft: 5}}>
          <Row
            style={{
              alignItems: 'center',
              paddingHorizontal: 5,
              borderRadius: 20,
              paddingVertical: 5,
            }}>
            <Appbar.BackAction style={{margin: 0, width: 24}} />
            <CircleAvatar
              imageProps={{
                source: {uri: 'https://source.unsplash.com/random/22'},
              }}
              size={33}
            />
          </Row>
        </Touchable>
        <Spacer width={5} />
        <Touchable
          onPress={onPressName}
          style={{flex: 1, justifyContent: 'center'}}>
          <Appbar.Content
            title="Frederik Audi"
            style={{paddingHorizontal: 5}}
          />
        </Touchable>
        <Spacer flex={1} />
        <Appbar.Action name="more-vert" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: 60}}
          inverted
        />

        <ConversationTextInput
          style={[styles.textInput]}
          {...{
            isReplying,
            senderId: reply.senderId,
            media: reply.media,
            text: reply.text,
            onClose,
          }}
        />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },

  textInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
