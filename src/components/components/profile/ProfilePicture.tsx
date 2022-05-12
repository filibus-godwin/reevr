import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '../../hooks/useTheme';
import {Column} from '../Containers';
import {ThemedMaterialCommunityIcons} from '../Icons';
import {Info} from '../Text';

type ProfilePictureProps = {} & React.ComponentProps<typeof FastImage>;

export const ProfilePicture: React.FC<ProfilePictureProps> = ({...props}) => {
  return (
    <>
      <FastImage {...props}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'flex-end',
          }}></View>
      </FastImage>
    </>
  );
};

type ChangePictureProps = {
  source: React.ComponentProps<typeof FastImage>['source'];
} & React.ComponentProps<typeof TouchableOpacity>;

export const ChangePicture: React.FC<ChangePictureProps> = ({
  source,
  ...props
}) => {
  const {roundness} = useTheme();
  return (
    <>
      <TouchableOpacity {...props}>
        <FastImage source={source} style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(100,100,100,0.5)',
            }}>
            <Column
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                backgroundColor: 'rgba(0,0,0,0.7)',
                flex: 1,
              }}>
              <ThemedMaterialCommunityIcons name="camera" size={40} />
              <Info>Change Picture</Info>
            </Column>
          </View>
        </FastImage>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
