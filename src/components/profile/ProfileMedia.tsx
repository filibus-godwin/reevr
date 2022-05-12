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
  onPressImage: VoidFunction;
  data: string[];
};

// TODO ADD LIST EMPTY COMPONENT

export const ProfileMedia: React.FC<Props> = ({
  style,
  onPressViewAll,
  onPressImage,
  data,
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
      <BaseContainer style={[{}, style]} {...props}>
        <Row style={{alignItems: 'center', paddingLeft: 15}}>
          <Info>Media, files and links</Info>
          <Spacer flex={1} />
          <Button text="view all" onPress={onPressViewAll} />
        </Row>
        <FlatList
          contentContainerStyle={{paddingLeft: 15}}
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Body>You have shared content with this user</Body>
          }
        />
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
