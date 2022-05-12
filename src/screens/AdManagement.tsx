import React from 'react';
import {Share, StyleSheet, View} from 'react-native';
import {Ad} from '../components/Ad';
import {Appbar} from '../components/Appbar';
import {BaseContainer} from '../components/Themed';
import {ViewPager} from '../components/ViewPager';
import {RootStackScreenProps} from '../types';

export const AdManagementScreen: React.FC<
  RootStackScreenProps<'AdManagement'>
> = ({navigation, route}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Manage Ads" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ViewPager tabs={['pending', 'approved', 'unapproved']}>
          <View key={0}>
            <Ad date={'07-09-2022'} />
          </View>
          <View key={1}>
            <Ad date={'09-09-2022'} />
          </View>
          <View key={2}>
            <Ad date={'10-10-2022'} />
          </View>
        </ViewPager>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
