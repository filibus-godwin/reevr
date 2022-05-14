import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomSheet} from '../components/BottomSheet';
import {ListItem} from '../components/ListItem';
import {RootStackScreenProps} from '../types';

export const ProfileMenuScreen: React.FC<
  RootStackScreenProps<'ProfileMenu'>
> = ({navigation, route}) => {
  const onPressSettings = () => navigation.replace('Settings');
  const onPressManageAds = () => navigation.replace('AdManagement');
  return (
    <>
      <BottomSheet onClose={navigation.goBack}>
        <ListItem title="Settings" onPress={onPressSettings} />
        <ListItem title="Manage Ads" onPress={onPressManageAds} />
      </BottomSheet>
    </>
  );
};

