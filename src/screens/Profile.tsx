import React from 'react';
import {
  FlatListProps,
  useWindowDimensions,
  FlatList,
  RefreshControl,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Appbar} from '../components/Appbar';
import {PostCard} from '../components/feed_card';
import {ProfileBookmarks} from '../components/profile/ProfileBookmarks';
import {ProfileInfo} from '../components/profile/ProfileInfo';
import {ProfilePicture} from '../components/profile/ProfilePicture';
import {Spacer} from '../components/Spacer';
import {BaseContainer, ElevatedContainer} from '../components/Themed';
import {useScrollHandler} from '../hooks/useScrollHandler';
import {Post, RootTabScreenProps} from '../types';
import {useEphemeralStore} from '../store/ephemeralStore';
import {useAppSelector} from '../srstore/rstore';
import {getProfileData} from '../data/ProfileData';

// TODO Theme the Appbar iconbutton

const AnimatedFlatList =
  Animated.createAnimatedComponent<FlatListProps<Required<Post>>>(FlatList);

export const ProfileScreen: React.FC<RootTabScreenProps<'Profile'>> = ({
  navigation,
}) => {
  const credentials = useAppSelector(state => state.credentials);
  const [refreshing, _] = React.useState(false);
  const refreshProfileCount = useEphemeralStore(
    state => state.refreshProfileCount,
  );
  const [a, setA] = React.useState(0);

  React.useEffect(() => {
    
  }, [a, refreshProfileCount]);


  const profile = useAppSelector(state => state.profiles[credentials.id]) || {
    accessToken: '',
    bio: 'Olympic swimmer',
    id: '',
    interests: ["swimming", "painting", "fishing"],
    numberOfFollowed: 10,
    numberOfFollowers: 10,
    numberOfPosts: 10,
    profilePictureUrl: 'https://source.unsplash.com/random/1?man',
    refreshToken: '',
    streamToken: '',
    username: 'Silas X',
    verified: false,
  };

  const {width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  const onPressImage = () => navigation.navigate('ExpandedPost', {postId: ''});
  const onPressLike = () => navigation.navigate('ExpandedPost', {postId: ''});
  const onPressComment = () => navigation.navigate('Comments', {postId: ''});
  const onPressEditProfile = () => navigation.navigate('EditProfile');
  const onPressMoreInfo = () => navigation.navigate('Sandbox');
  const onPressViewAll = () => navigation.navigate('Bookmarks');
  const onPressItem = () => navigation.navigate('Bookmarks');
  const onPressName = () => {};
  const onPressShare = () => {};
  const onPressMenu = () => {};
  const onPressBookmark = () => {};

  const renderItem: React.ComponentProps<
    typeof AnimatedFlatList
  >['renderItem'] = ({item, index}) => (
    <PostCard
      location={profile.id}
      id={item.id}
      media={item.media}
      mediaAspectRatio={item.media !== undefined ? 3/2 : 3/2}
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
      onPressLike={() => {
      }}
      onPressBookmark={async () => {
      }}
      {...{
        onPressComment,
        onPressImage,
        onPressShare,
        onPressName,
      }}
      liked={item.liked}
      bookmarked={item.bookmarked}
    />
  );

  const keyExtractor: FlatListProps<Required<Post>>['keyExtractor'] = item =>
    item.id;

  const {
    onScroll,
    appbarBackgroundStyle,
    appbarContentStyle,
    imageStyle,
    titleStyle,
  } = useScrollHandler(width);

  const ListHeader = () => (
    <>
      <ProfileInfo
        bio={profile.bio}
        name={profile.username}
        occupation={profile.interests}
        numberOfFollowers={profile.numberOfFollowers}
        numberOfPosts={profile.numberOfPosts}
        onPressMoreInfo={onPressMoreInfo}
        onPressEditProfile={onPressEditProfile}
        personal
        nameStyle={titleStyle}
        style={{
          paddingVertical: 20,
        }}
      />
      <ElevatedContainer transparent>
        {profile.username !== undefined && (
          <ProfileBookmarks
            data={[]}
            style={{
              paddingBottom: 10,
              backgroundColor: 'transparent',
            }}
            onPressViewAll={onPressViewAll}
            onPressItem={onPressItem}
          />
        )}
      </ElevatedContainer>
    </>
  );


  const profileData = getProfileData({onPressBookmark,onPressComment,onPressImage,onPressLike,onPressMenu,onPressName,onPressShare})

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
        <Spacer width={15} />
        <Appbar.Content
          title={profile.username as string}
          style={appbarContentStyle}
        />
        <Spacer flex={1} />
        <Appbar.Action
          style={{backgroundColor:"#rgba(0,0,0,0.2)"}}
          name="more-vert"
          onPress={() => navigation.navigate('ProfileMenu')}
        />
      </Appbar.Header>
      <BaseContainer style={[{}]}>
        <ElevatedContainer
          transparent
          style={[
            {position: 'absolute', top: 30, width: width, height: width},
            imageStyle,
          ]}>
          <ProfilePicture
            source={{
              uri: profile.profilePictureUrl,
            }}
            style={{
              flex: 1,
              overflow: 'hidden',
            }}
          />
        </ElevatedContainer>
        <AnimatedFlatList
          ListHeaderComponent={<ListHeader />}
          onScroll={onScroll}
          keyExtractor={keyExtractor}
          //@ts-ignore
          data={profileData}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingTop: width - top,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setA(Math.random());
              }}
              progressViewOffset={100}
            />
          }
        />
      </BaseContainer>
    </>
  );
};

