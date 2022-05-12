import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BottomSheet} from '../components/BottomSheet';
import {Button} from '../components/Button';
import {Spacer} from '../components/Spacer';
import {TouchableImage} from '../components/TouchableImage';
import {RootStackScreenProps} from '../types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import CameraRoll from '@react-native-community/cameraroll';
import {Touchable} from '../components/Touchable';
import {Info} from '../components/Text';
import {FastImageProps} from 'react-native-fast-image';
import {Row} from '../components/Layout';
import {BaseContainer, ThemedMaterialIcons} from '../components/Themed';

export const CreateMenuScreen: React.FC<RootStackScreenProps<'Create'>> = ({
  navigation,
}) => {
  const onPressCreateAd = () => navigation.replace('CreateAd');
  const onPressWriteSomething = () => navigation.replace('CreateTextOnly');
  const onPressSeeMore = () => {
    launchImageLibrary({mediaType: 'mixed', selectionLimit: 2}).then(val => {
      if (val.assets !== undefined)
        navigation.replace('CreateMedia', {assets: val.assets});
    });
  };

  const onPressLaunchCamera = () => {
    launchCamera({mediaType: 'photo', maxHeight: 200}).then(val => {
      if (val.assets !== undefined)
        navigation.replace('CreateMedia', {assets: val.assets});
    });
  };
  return (
    <>
      <View style={styles.base}>
        <BottomSheet onClose={navigation.goBack}>
          <View style={{paddingHorizontal: 0}}>
            <Button
              text="create an ad"
              style={{alignSelf: 'flex-start'}}
              onPress={onPressCreateAd}
            />
            <Spacer height={5} />
            <Button
              text="Write Something"
              style={{alignSelf: 'flex-start'}}
              onPress={onPressWriteSomething}
            />
            <Spacer height={5} />
          </View>
          <Spacer height={5} />
          <Row style={{alignItems: 'center', paddingLeft: 15}}>
            <Info>Post</Info>
            <Spacer flex={1} />
            <Button text="See more" onPress={onPressSeeMore} />
          </Row>
          <BaseContainer>
            <ScrollView horizontal>
              <Touchable onPress={onPressLaunchCamera}>
                <SqareIcon />
              </Touchable>
              {/* {photos.map((d, i) => {
                return <SqareImage source={{uri: d.node.image.uri}} />;
              })} */}

              <SqareImage
                source={{uri: 'https://source.unsplash.com/random/2'}}
              />
              <SqareImage
                source={{uri: 'https://source.unsplash.com/random/3'}}
              />
              <SqareImage
                source={{uri: 'https://source.unsplash.com/random/1'}}
              />
              <SqareImage
                source={{uri: 'https://source.unsplash.com/random/1'}}
              />
            </ScrollView>
          </BaseContainer>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

const SqareImage: React.FC<{source: FastImageProps['source']}> = ({source}) => {
  return (
    <TouchableImage
      imageProps={{source: source}}
      style={{width: 120, height: 120}}
    />
  );
};
const SqareIcon: React.FC<{}> = ({}) => {
  return (
    <View
      style={{
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ThemedMaterialIcons name="camera" color={'#ddd'} size={34} />
    </View>
  );
};
