import React, {createRef} from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import PagerView, {PagerViewProps} from 'react-native-pager-view';
import {useSharedValue} from 'react-native-reanimated';
import {Appbar} from '../components/Appbar';
import {Listing} from '../components/Listing';
import {PagerTab} from '../components/PagerTab';
import {BaseContainer} from '../components/Themed';
import {ViewPager} from '../components/ViewPager';
import {RootStackScreenProps} from '../types';

export const AdsAndContestListScreen: React.FC<
  RootStackScreenProps<'AdAndContestList'>
> = ({navigation, route}) => {
  const offset = useSharedValue(0);
  const position = useSharedValue(0);
  const onPageScroll: PagerViewProps['onPageScroll'] = e => {
    offset.value = e.nativeEvent.offset;
    position.value = e.nativeEvent.position;
  };

  const onPressContest = () =>
    navigation.navigate('ContestInfo', {contestId: ''});
  const onPressAd = () => navigation.navigate('AdInfo', {adId: ''});

  const pager = createRef<PagerView>();
  const onPressTab = (index: number) => pager.current?.setPage(index);

  const adRenderItem: FlatListProps<any>['renderItem'] = ({item}) => (
    <Listing
      type="Ad"
      {...{onPressMoreInfo: onPressAd}}
      title={`Infantry`}
      amount="USD 250"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sed ligula nec auctor. Donec sed lobortis odio. Aliquam vulputate nibh efficitur"
    />
  );
  const contestRenderItem: FlatListProps<any>['renderItem'] = ({item}) => (
    <Listing
      type="Contest"
      {...{onPressMoreInfo: onPressContest}}
      title={`Infantry`}
      amount="USD 250"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sed ligula nec auctor. Donec sed lobortis odio. Aliquam vulputate nibh efficitur"
    />
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.Action name="close" onPress={navigation.goBack} />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ViewPager tabs={['Ads', 'Contests']}>
          <View key={1}>
            <FlatList
              data={new Array(5).fill(0)}
              renderItem={adRenderItem}
              numColumns={2}
            />
          </View>
          <View key={2}>
            <FlatList
              data={new Array(5).fill(0)}
              renderItem={contestRenderItem}
              numColumns={2}
            />
          </View>
        </ViewPager>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {flex: 1},
});
