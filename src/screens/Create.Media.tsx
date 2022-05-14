import React from 'react';
import {
  Dimensions,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import {Asset} from 'react-native-image-picker';
import {Appbar} from '../components/Appbar';
import {Button} from '../components/Button';
import {Spacer} from '../components/Spacer';
import {BaseContainer, ElevatedContainer} from '../components/Themed';
import {useEphemeralStore} from '../store/ephemeralStore';
import {RootStackScreenProps} from '../types';
import {Formik} from 'formik';

export const CreateMediaScreen: React.FC<
  RootStackScreenProps<'CreateMedia'>
> = ({navigation, route}) => {
  const {width} = Dimensions.get('screen');
  const addToUploadBatch = useEphemeralStore(state => state.addToUploadBatch);

  const onPress = () => {
    navigation.goBack();
  };

  const renderItem: FlatListProps<Asset>['renderItem'] = ({index, item}) => (
    <FastImage source={{uri: item.uri}} style={{width}} resizeMode="contain" />
  );

  
  return (
    <>
      <Formik
        initialValues={{media: [], text: ''}}
        onSubmit={({text}) => {
          addToUploadBatch({
            postedAt: new Date(),
            media: route.params.assets,
            text,
            numberOfComments: 0,
            numberOfLikes: 0,
            timesBookmarked: 0,
          });
          navigation.goBack();
        }}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <Appbar.Header style={{}}>
              <Appbar.Action name="close" onPress={navigation.goBack} />
              <Appbar.Content title="Create" />
              <Spacer flex={1} />
              <Button text="submit" onPress={handleSubmit} />
            </Appbar.Header>
            <BaseContainer style={styles.base}>
              <FlatList
                data={route.params.assets}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                style={{}}
                contentContainerStyle={{}}
              />
              <View style={{flex: 1}}>
                <ElevatedContainer style={{borderRadius: 5, margin: 15}}>
                  <TextInput
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      color: '#fff',
                    }}
                    placeholder="what's on your mind?"
                    placeholderTextColor="#999"
                    selectionColor={'#fff'}
                    multiline
                    maxLength={400}
                    value={values.text}
                    onChangeText={handleChange('text')}
                  />
                </ElevatedContainer>
              </View>
            </BaseContainer>
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
