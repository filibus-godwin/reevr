import React, {useEffect, useState} from 'react';
import {FlatList, FlatListProps, StatusBar, StyleSheet} from 'react-native';
import {Appbar} from '../components/Appbar';
import {SuggestedUsers} from '../components/SuggestedUsers';
import {PostCard} from '../components/feed_card';
import {Spacer} from '../components/Spacer';
import {SuggestedContests} from '../components/SuggestedContests';
import {BaseContainer} from '../components/Themed';
import {MediaAsset, Post, RootTabScreenProps} from '../types';
import {UploadManager} from '../components/UploadManager';
import {useAppSelector} from '../srstore/rstore';
import {usePostHandler} from '../shared-hooks/usePostHandler';
import { getFeedData } from '../data/FeedData';

export const FeedScreen: React.FC<RootTabScreenProps<'Feed'>> = ({
  navigation,
  route,
}) => {
  const onPressContest = () =>
    navigation.navigate('ContestInfo', {contestId: ''});
  const onPressAd = () => navigation.navigate('AdInfo', {adId: ''});

  const onPressName = () => navigation.navigate('UserProfile', {userId: ''});
  const onPressMenu = () =>
    navigation.navigate('PostCardMenu', {postId: '', authorId: ''});
  const onPressLike = () => navigation.navigate('Sandbox');
  const onPressShare = () => {};
  const onPressBookmark = () => navigation.navigate('Sandbox');
  const onPressComment = () => {
    navigation.navigate('Comments', {postId: ''});
  };
  const onPressSeeAll = () =>
    navigation.navigate('OngoingContest', {contestId: ''});
  const onPressImage = () => navigation.navigate('ExpandedPost', {postId: ''});

  const renderItem: FlatListProps<Required<Post>>['renderItem'] = ({
    item,
    index,
  }) => {
    // @ts-expect-error
    if (item.userSuggestions)
      // @ts-expect-error
      return <SuggestedUsers users={item.userSuggestions} />;

    return (
      // @ts-expect-error
      <PostCard
        location="feed"
        {...item}
        id={item.id}
        avatarUri={item.author?.profilePictureUrl}
        name={item.author?.username}
        liked={item.liked}
        likes={item.numberOfLikes}
        mediaAspectRatio={1}
      />
    );
  };

  const [uploads, setUploads] = useState<MediaAsset[][]>([]);

  const {loadFeed} = usePostHandler();
  useEffect(() => {
    loadFeed();
    if (route.params.currentUploads.length > 0)
      setUploads([...uploads, route.params.currentUploads]);
  }, [route.params.currentUploads]);

  const posts = useAppSelector(s => s.posts.posts['feed']);

  const feedData = getFeedData({onPressBookmark,onPressComment,onPressImage,onPressLike,onPressMenu,onPressName,onPressShare})

  return (
    <>
      <StatusBar />
      <Appbar.Header>
        <Appbar.Content title="Reevr" />
        <Spacer flex={1} />
        <Appbar.Action
          name="add"
          onPress={() => {
            navigation.navigate('Create');
          }}
        />
        <Appbar.Action
          name="notifications"
          onPress={() => {
            navigation.navigate('Activities');
          }}
        />
      </Appbar.Header>
      <BaseContainer style={[styles.base]}>
        <FlatList
          ListHeaderComponent={
            <>
              <UploadManager />
              <SuggestedContests
                listings={[
                  {
                    description: 'awards are given to those who deserve them',
                    title: 'Battle Royale',
                    type: 'Contest',
                    amount: 'USD 2000',
                  },
                  {
                    description: 'awards are given to those who deserve them',
                    title: 'Battle Royale',
                    type: 'Contest',
                    amount: 'USD 2000',
                  },
                  {
                    description: 'awards are given to those who deserve them',
                    title: 'Battle Royale',
                    type: 'Contest',
                    amount: 'USD 2000',
                  },
                ]}
                onPressSeeAll={onPressSeeAll}
                onPressContest={() => {
                }}
              />
            </>
          }
          data={feedData}
          renderItem={renderItem}
        />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
