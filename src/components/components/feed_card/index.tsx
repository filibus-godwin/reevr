import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VoidFunction} from '../../type';
import {HorizontalDivider} from '../Dividers';
import {ThemedView} from '../ThemedView';
import {CommentTextInput} from './comment';
import {TileFooter} from './footer';
import {TileHeader} from './header';
import {TileMedia} from './media';
import {TileText} from './text';

type Props = {} & React.ComponentProps<typeof TileHeader> &
  React.ComponentProps<typeof TileFooter> &
  React.ComponentProps<typeof TileMedia> &
  React.ComponentProps<typeof TileText> & {mediaAspectRatio: number};

export const StoryTile: React.FC<Props> = ({
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
  onPressLike,
  onPressComment,
  onPressShare,
  onPressBookmark,
  onPressImage,
}) => {
  return (
    <>
      <ThemedView>
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
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 15,
  },
});
