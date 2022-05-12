import React from 'react';
import {StyleSheet, View} from 'react-native';
import {usePostHandler} from '../../shared-hooks/usePostHandler';
import {VoidFunction} from '../../types';
import {HorizontalDivider} from '../Dividers';
import {BaseContainer} from '../Themed';
import {CommentTextInput} from './comment';
import {TileFooter} from './footer';
import {TileHeader} from './header';
import {TileMedia} from './media';
import {TileText} from './text';

type Props = {id: string} & React.ComponentProps<typeof TileHeader> &
  React.ComponentProps<typeof TileFooter> &
  React.ComponentProps<typeof TileMedia> &
  React.ComponentProps<typeof TileText> & {
    mediaAspectRatio: number;
    location: string;
  };

const Index: React.FC<Props> = ({
  id,
  name,
  text,
  avatarUri,
  timestamp,
  likes,
  comments,
  views,
  media,
  sponsored,
  liked,
  bookmarked,
  mediaAspectRatio,
  onPressName,
  onPressMenu,
  // onPressLike,
  onPressComment,
  onPressShare,
  // onPressBookmark,
  onPressImage,
  location,
}) => {
  const {bookmark, like} = usePostHandler();

  const onPressLike = () => like(location, id);
  const onPressBookmark = () => bookmark(location, id);

  return (
    <>
      <BaseContainer>
        {/* <HorizontalDivider style={{backgroundColor: '#dddddd22'}} /> */}
        <View style={[styles.base, {}]}>
          <TileHeader
            {...{
              name,
              avatarUri,
              timestamp,
              onPressName,
              onPressMenu,
              sponsored,
            }}
            style={{paddingHorizontal: 15}}
          />

          <TileMedia
            {...{onPressImage, media}}
            style={{
              paddingTop: 10,
              marginHorizontal: 0,
              aspectRatio: mediaAspectRatio,
            }}
          />
          <TileText {...{text}} style={{marginTop: 5, paddingHorizontal: 15}} />
          <View
            style={{
              marginTop: 5,
              paddingHorizontal: 15,
            }}>
            <TileFooter
              {...{
                likes,
                comments,
                views,
                liked,
                bookmarked,
                onPressLike,
                onPressComment,
                onPressShare,
                onPressBookmark,
              }}
            />
          </View>
          {/* <CommentTextInput /> */}
        </View>
        {/* <HorizontalDivider /> */}
      </BaseContainer>
    </>
  );
};

export const PostCard = React.memo(Index);

const styles = StyleSheet.create({
  base: {
    paddingVertical: 15,
  },
});
