import Color from 'color';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VoidFunction} from '../../types';
import {IconButton} from '../IconButton';
import {Spacer} from '../Spacer';
import {Meta} from './meta';

export const TileFooter: React.FC<{
  likes: number | string;
  views?: number | string;
  comments: number | string;
  bookmarked?: boolean;
  liked?: boolean;
  onPressLike: VoidFunction;
  onPressComment: VoidFunction;
  onPressShare: VoidFunction;
  onPressBookmark: VoidFunction;
}> = ({
  likes,
  comments,
  views,
  liked,
  bookmarked,
  onPressBookmark,
  onPressLike,
  onPressComment,
  onPressShare,
}) => {
  // const [loading, setLoading] = useState(false);
  const onBookmarkPressed = async () => {
    // setLoading(true);
    onPressBookmark();
    // setLoading(false);
  };
  return (
    <>
      <View style={styles.base}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Meta
            name={liked ? 'favorite' : 'favorite-outline'}
            data={likes}
            onPress={onPressLike}
            color={liked ? Color('#ff0000').darken(0.2).toString() : undefined}
          />
          <Spacer width={10} />
          <Meta
            name="chat-bubble-outline"
            data={comments}
            onPress={onPressComment}
          />
          {/* <Spacer width={10} /> */}
          <IconButton
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            style={{margin: 0}}
            onPress={onBookmarkPressed}
            // loading={loading}
          />
        </View>
        <IconButton
          name="send"
          style={{margin: 0, width: 24}}
          onPress={onPressShare}
        />
        {/* <Meta name="send" data={comments} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
