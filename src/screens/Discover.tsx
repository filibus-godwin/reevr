import React from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {Spacer} from '../components/Spacer';
import {BaseContainer} from '../components/Themed';
import {TouchableImage} from '../components/TouchableImage';
import {RootTabScreenProps} from '../types';
import {LayoutHandler} from '../utils/LayoutHandler';

export const DiscoverScreen: React.FC<RootTabScreenProps<'Discover'>> = ({
  navigation,
  route,
}) => {
  const onPressImage = () => navigation.navigate('PostList');

  const renderItem: FlatListProps<any>['renderItem'] = ({item, index}) => {
    const cond = index % 2 == 0;
    cond && LayoutHandler.setRandomLayout();
    cond && LayoutHandler.setRandomRatio();

    const {left, right} = LayoutHandler.dims();
    return (
      <TouchableImage
        containerStyle={{flex: cond ? left.flex : right.flex}}
        imageProps={{
          source: {
            uri: `https://source.unsplash.com/random/${index}`,
          },
          style: {borderRadius: 5},
        }}
        onPress={onPressImage}
        style={{
          borderRadius: 5,
          height: LayoutHandler.CurrentAspectRatio,
          flex: cond ? left.flex : right.flex,
          marginRight: cond ? 2 : 0,
        }}
      />
    );
  };

  return (
    <>
      <SearchBar onSubmit={() => navigation.navigate('SearchResult')} />
      <BaseContainer style={styles.base}>
        <FlatList
          numColumns={2}
          keyExtractor={d => `${d}`}
          data={new Array(11).fill(0).map((v, i) => i)}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Spacer height={2} />}
          contentContainerStyle={{marginHorizontal: 4}}
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
