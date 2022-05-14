import React, {useEffect} from 'react';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {Appbar} from '../components/Appbar';
import {Conversation} from '../components/message/Conversation';
import {Spacer} from '../components/Spacer';
import {BaseContainer} from '../components/Themed';
import {ChatListData} from '../data/ChatListData';
import {RootTabScreenProps} from '../types';

export const ChatListScreen: React.FC<RootTabScreenProps<'ChatList'>> = ({
  navigation,
}) => {

  const onPressConversation = () =>
    navigation.navigate('Conversation', {userId: ''});
  const onPressSearch = () => navigation.navigate('UserSearch');

  const renderItem: FlatListProps<
    React.ComponentProps<typeof Conversation>
  >['renderItem'] = ({item}) => (
    <Conversation {...item} onPress={onPressConversation} />
  );

  useEffect(() => {
    ChatListData;
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Chats" />
        <Spacer flex={1} />
        <Appbar.Action name="search" onPress={onPressSearch} />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <FlatList data={ChatListData} renderItem={renderItem} />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
