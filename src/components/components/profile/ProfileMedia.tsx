import React from 'react';
import {FlatList, FlatListProps, StyleSheet, ViewProps} from 'react-native';
import {VoidFunction} from '../../type';
import {Button} from '../Button';
import {Column, Row} from '../Containers';
import {Spacer} from '../Spacer';
import {Info} from '../Text';
import {ThemedView} from '../ThemedView';
import {TouchableImage} from '../TouchableImage';

type Props = ViewProps & {
  onPressViewAll?: VoidFunction;
  onPressImage: VoidFunction;
};

// TODO ADD LIST EMPTY COMPONENT

export const ProfileMedia: React.FC<Props> = ({
  style,
  onPressViewAll,
  onPressImage,
  ...props
}) => {
  const renderItem: FlatListProps<any>['renderItem'] = ({index}) => (
    <TouchableImage
      imageProps={{
        source: {uri: `https://source.unsplash.com/random/${index}`},
      }}
      style={{width: 120, height: 120, borderRadius: 5, marginLeft: 2}}
      onPress={onPressImage}
    />
  );

  return (
    <>
      <ThemedView style={[{}, style]} {...props}>
        <Row style={{alignItems: 'center', paddingLeft: 15}}>
          <Info>Media, files and links</Info>
          <Spacer flex={1} />
          <Button text="view all" onPress={onPressViewAll} />
        </Row>
        <FlatList
          contentContainerStyle={{paddingLeft: 0}}
          horizontal
          data={new Array(7).fill(0).map((_d, i) => i)}
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
