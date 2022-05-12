import React from 'react';
import {FlatList, FlatListProps, StyleSheet, ViewProps} from 'react-native';
import {VoidFunction} from '../../types';
import {Button} from '../Button';
import {Row} from '../Layout';
import {Spacer} from '../Spacer';
import {Body, Info} from '../Text';
import {BaseContainer} from '../Themed';
import {TouchableImage} from '../TouchableImage';

type Props = ViewProps & {
  onPressViewAll?: VoidFunction;
  onPressItem?: VoidFunction;
  data: string[];
};

export const ProfileBookmarks: React.FC<Props> = ({
  style,
  onPressViewAll,
  onPressItem,
  data,
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
      <BaseContainer style={[{}, style]} {...props}>
        <Row style={{alignItems: 'center', paddingLeft: 15}}>
          <Info>Bookmarks</Info>
          <Spacer flex={1} />
          <Button text="view all" onPress={onPressViewAll} />
        </Row>
        <FlatList
          contentContainerStyle={{paddingLeft: 15}}
          horizontal
          // data={[]}
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Body>You have no bookmarks</Body>}
        />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
