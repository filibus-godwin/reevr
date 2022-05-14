import React from 'react';
import {StyleSheet} from 'react-native';
import {ExpandedFeedCard} from '../components/feed_card/expanded';
import {Appbar} from '../components/Appbar';
import {BaseContainer} from '../components/Themed';
import {RootStackScreenProps} from '../types';

// TODO Consider making similar posts appear below the expanded post, watchout for any cyclic events

export const ExpandedPostScreen: React.FC<
  RootStackScreenProps<'ExpandedPost'>
> = ({navigation, route}) => {
  const onPressName = () => navigation.navigate('UserProfile', {userId: ''});
  const onPressMenu = () => navigation.navigate('PostCardMenu', {authorId:"",postId:""});
  const onPressLike = () => {};
  const onPressShare = () => {};
  const onPressBookmark = () => {};
  const onPressComment = () => {
    navigation.navigate('Comments', {postId: ''});
  };

  return (
    <>
      <Appbar.Header style={{}}>
        <Appbar.Action name="close" onPress={navigation.goBack} />
        <Appbar.Content title="Aronold Izanegro" subtitle="18 HRS AGO" />
      </Appbar.Header>
      <BaseContainer style={[styles.base, {flex: 1}]}>
        <ExpandedFeedCard
          style={{flex: 1}}
          {...{
            onPressShare,
            onPressComment,
            onPressLike,
            onPressBookmark,
            onPressMenu,
            onPressName,
            onPressImage: () => {},
          }}
          sponsored
          liked
          bookmarked
          likes="23k"
          views="320k"
          comments="12k"
          avatarUri="https://source.unsplash.com/random/23"
          timestamp="6hrs ago"
          text="Aenean egestas arcu ut augue tempus gravida. Nam non elit pretium, venenatis diam non, condimentum ligula. In consequat tortor id facilisis pharetra. Proin id ante leo. Proin et libero nec felis mattis tincidunt ac id lorem. Praesent sodales est enim, ac feugiat nisi venenatis sed. Curabitur et rutrum lacus.

Vestibulum nec tortor sapien. Duis rutrum vitae nisl quis malesuada. Nulla auctor maximus purus nec lobortis. Donec vel pharetra risus, a vehicula nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi quis elit vel nisl consequat vestibulum. Aliquam pulvinar massa lectus, vitae ultricies ligula sodales aliquet. In quis elit quis lorem vestibulum ullamcorper ut in nisi. Donec vitae augue eget tellus efficitur porttitor sed nec ipsum. Nullam a cursus sem. Etiam sodales arcu eu orci ornare condimentum. Mauris nec auctor leo. Morbi sollicitudin, augue ut fringilla vestibulum, mi nibh gravida nibh, eget malesuada elit nibh sit amet tellus."
          name={'Arnold Izanegro'}
          media={[
            {
              uri: 'https://source.unsplash.com/random/23',
            },
            {
              uri: 'https://source.unsplash.com/random/19',
            },
            {
              uri: 'https://source.unsplash.com/random/0?woman,white',
            },
          ]}
        />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {flex: 1},
});
