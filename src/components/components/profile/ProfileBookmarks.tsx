import React from 'react';
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {VoidFunction} from '../../types';
import {Button} from '../Button';
import {Column, Row} from '../Containers';
import {Spacer} from '../Spacer';
import {Info} from '../Text';
import {ThemedView} from '../ThemedView';
import {TouchableImage} from '../TouchableImage';

type Props = ViewProps & {
  onPressViewAll?: VoidFunction;
  onPressItem?: VoidFunction;
};

export const ProfileBookmarks: React.FC<Props> = ({
  style,
  onPressViewAll,
  onPressItem,
  ...props
}) => {
  const renderItem: FlatListProps<any>['renderItem'] = ({index}) => (
    <TouchableImage
      imageProps={{
        source: {uri: `https://source.unsplash.com/random/${index}`},
        style: {borderRadius: 5},
      }}
      style={{width: 120, height: 120, borderRadius: 5, marginLeft: 2}}
      onPress={onPressItem}
    />
  );
  return (
    <>
      <ThemedView style={[{}, style]} {...props}>
        <Row style={{alignItems: 'center', paddingLeft: 15}}>
          <Info>Bookmarks</Info>
          <Spacer flex={1} />
          <Button text="view all" onPress={onPressViewAll} />
        </Row>
        <FlatList
          contentContainerStyle={{paddingLeft: 15}}
          horizontal
          data={[]}
          // data={new Array(7).fill(0).map((_d, i) => i)}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
