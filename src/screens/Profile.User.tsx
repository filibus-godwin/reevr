import React from 'react';
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Appbar} from '../components/Appbar';
import {PostCard} from '../components/feed_card';
import {ProfileInfo} from '../components/profile/ProfileInfo';
import {ProfileMedia} from '../components/profile/ProfileMedia';
import {ProfilePicture} from '../components/profile/ProfilePicture';
import {Spacer} from '../components/Spacer';
import {BaseContainer, ElevatedContainer} from '../components/Themed';
import {useScrollHandler} from '../hooks/useScrollHandler';
import {RootStackScreenProps} from '../types';
import {usePostStore} from '../store/post.store';
import {useEphemeralStore} from '../store/ephemeralStore';
import {PostResponseType} from '../client/types';
import {useProfileStore} from '../store/profile.store';

const AnimatedFlatList =
  Animated.createAnimatedComponent<FlatListProps<PostResponseType>>(FlatList);

const dummyData = {
  interests: [],
  _id: '',
  bio: '',
  profilePictureUrl: '',
  username: undefined,
  numberOfFollowers: 0,
  numberOfPosts: 0,
};

export const UserProfileScreen: React.FC<
  RootStackScreenProps<'UserProfile'>
> = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  // const [user, setUser] = React.useState<Partial<UserResponseType>>(dummyData);
  const addPosts = usePostStore(state => state.addPosts);
  const post = usePostStore(state => state.posts);
  const refreshProfileCount = useEphemeralStore(
    state => state.refreshProfileCount,
  );
  const profiles = useProfileStore(state => state.profiles);

  const [refreshing, _] = React.useState(false);
  const [a, setA] = React.useState(0);
  const onPressImage = () => navigation.navigate('ExpandedPost', {postId: ''});

  const renderItem: React.ComponentProps<
    typeof AnimatedFlatList
  >['renderItem'] = ({item}) => (
    <PostCard
      location={route.params.userId}
      id={item.id}
      media={item.media}
      mediaAspectRatio={item.media !== undefined ? 5 / 4 : 1.1}
      avatarUri={item.author.profilePictureUrl}
      text={item.text}
      likes={item.numberOfLikes}
      comments={item.numberOfComments}
      name={item.author.username}
      timestamp={item.postedAt as unknown as string}
      onPressMenu={() => {
        navigation.navigate('PostCardMenu', {
          postId: item.id,
          authorId: item.author.id,
        });
      }}
      onPressBookmark={() => {}}
      {...{
        onPressComment,
        onPressImage,
        onPressShare,
        onPressName,
        onPressLike,
      }}
    />
  );

  const onPressComment = () =>   navigation.navigate('Comments', {postId: ''});
  const onPressMoreInfo = () => navigation.navigate('Sandbox');
  const onPressLike = () => navigation.navigate('ExpandedPost', {postId: ''});
  const onPressMenu = () =>
  navigation.navigate('PostCardMenu', {authorId: '', postId: ''});
  const onPressShare = () => {};
  const onPressBookmark = () => {};
  const onPressName = () => {};
  

  const {
    onScroll,
    appbarBackgroundStyle,
    appbarContentStyle,
    imageStyle,
    titleStyle,
  } = useScrollHandler(width);

  //@ts-ignore
  const onPressViewAll = () => navigation.navigate('Files');
  //@ts-ignore
  const onPressImageMedia = () => navigation.navigate('MediaView');

  React.useEffect(() => {
  }, [a, refreshProfileCount]);

  const user = profiles[route.params.userId] ?? dummyData;
  return (
    <>
      <Appbar.Header
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            backgroundColor: 'transparent',
          },

          appbarBackgroundStyle as any,
        ]}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Arnold Izanegro" style={appbarContentStyle} />
        <Spacer flex={1} />
        <Appbar.Action
          style={{}}
          name="more-vert"
          onPress={() => navigation.navigate('ProfileMenu')}
        />
      </Appbar.Header>

      <BaseContainer style={styles.base}>
        <ElevatedContainer
          style={[
            {position: 'absolute', top: 30, height: width, width},
            imageStyle,
          ]}>
          <ProfilePicture
            source={{uri: user.profilePictureUrl}}
            style={{flex: 1}}
          />
        </ElevatedContainer>
        <AnimatedFlatList
          ListHeaderComponent={
            <>
              <ProfileInfo
                bio={user.bio}
                name={user.username}
                occupation={user.interests}
                numberOfFollowers={user.numberOfFollowers}
                numberOfPosts={user.numberOfPosts}
                onPressMoreInfo={onPressMoreInfo}
                nameStyle={titleStyle}
                style={{paddingVertical: 20}}
              />
              <ProfileMedia
                style={{paddingBottom: 10}}
                onPressViewAll={onPressViewAll}
                onPressImage={onPressImageMedia}
                data={[]}
              />
            </>
          }
          data={post[route.params.userId]}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: width - top}}
          onScroll={onScroll}
          refreshing={refreshing}
          onRefresh={() => {
            setA(a + 1);
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
});
