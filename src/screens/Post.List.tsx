import React from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import {Appbar} from '../components/Appbar';
import {PostCard} from '../components/feed_card';
import {BaseContainer} from '../components/Themed';
import {getFeedData} from '../data/FeedData';
import {RootStackScreenProps} from '../types';

export const PostListScreen: React.FC<RootStackScreenProps<'PostList'>> = ({
  navigation,
  route,
}) => {
  const onPressName = () => navigation.navigate('UserProfile', {userId: ''});
  const onPressMenu = () => navigation.navigate('PostCardMenu', {postId: ''});
  const onPressLike = () => navigation.navigate('Sandbox');
  const onPressShare = () => {};
  const onPressBookmark = () => {};
  const onPressComment = () => {
    navigation.navigate('Comments', {postId: ''});
  };
  const onPressImage = () => navigation.navigate('ExpandedPost', {postId: ''});

  const feedData = getFeedData({
    onPressImage,
    onPressBookmark,
    onPressComment,
    onPressLike,
    onPressMenu,
    onPressName,
    onPressShare,
  });

  const renderItem: FlatListProps<typeof feedData[0]>['renderItem'] = ({
    item,
    index,
  }) => <PostCard {...item} />;

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Explore" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <FlatList data={feedData} renderItem={renderItem} />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
