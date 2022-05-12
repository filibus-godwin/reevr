import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import {CircleSnail} from 'react-native-progress';
import {UserResponseType} from '../client/types';
import {Appbar} from '../components/Appbar';
import {Button} from '../components/Button';
import {CaptionedInput} from '../components/CaptionedInput';
import {ChangePicture} from '../components/profile/ProfilePicture';
import {Spacer} from '../components/Spacer';
import {BaseContainer} from '../components/Themed';
import {useTheme} from '../hooks/useTheme';
import {MediaAsset, RootStackScreenProps} from '../types';
import {launchImageLibrary} from 'react-native-image-picker';
import {useEphemeralStore} from '../store/ephemeralStore';
import {reevr} from '../client';
import {useStore} from '../store/store';

// profile photo, bio, location, occupation, website url

export const EditProfileScreen: React.FC<
  RootStackScreenProps<'EditProfile'>
> = ({navigation, route}) => {
  const [user, setUser] = useState<
    Pick<
      UserResponseType,
      'bio' | 'interests' | 'profilePictureUrl' | 'username'
    >
  >({bio: '', interests: [], profilePictureUrl: '', username: ''});
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const incrementRefreshProfileCount = useEphemeralStore(
    state => state.incrementRefreshProfileCount,
  );

  const userData = useStore(state => state.user);

  useEffect(() => {
    setLoading(true);
    reevr.user
      .getUser(userData.id)
      .then(e => {
        e && setUser(e);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const {primary} = useTheme();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          bio: user.bio,
          username: user.username,
          profilePictureUrl: user.profilePictureUrl,
        }}
        onSubmit={async ({bio, profilePictureUrl, username}) => {
          Keyboard.dismiss();
          setSending(true);
          reevr.user
            .editUser({
              bio,
              username,
              interests: user.interests,
              profilePictureUrl,
              fileUri: profilePictureUrl,
            })
            .then(e => {
              setLoading(false);
              incrementRefreshProfileCount();
              navigation.goBack();
            })
            .catch(e => {
              setLoading(false);
              console.log(e.message);
            });
        }}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Appbar.Header>
              <Appbar.Action name="close" onPress={navigation.goBack} />
              <Appbar.Content title="Edit Profile" />
              <Spacer flex={1} />
              <Button text="submit" loading={sending} onPress={handleSubmit} />
            </Appbar.Header>

            <BaseContainer style={styles.base}>
              {loading ? (
                <>
                  <CircleSnail
                    direction="clockwise"
                    indeterminate
                    size={80}
                    duration={500}
                    color={primary}
                    thickness={1}
                    style={{alignSelf: 'center'}}
                  />
                </>
              ) : (
                <>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ChangePicture
                      onPress={async () =>
                        launchImageLibrary({
                          mediaType: 'photo',
                          selectionLimit: 1,
                        }).then(e => {
                          if (e.assets) {
                            handleChange('profilePictureUrl')(
                              e.assets[0].uri as string,
                            );
                          }
                        })
                      }
                      source={{uri: values.profilePictureUrl}}
                      style={{aspectRatio: 3 / 2}}
                    />
                  </View>
                  <Spacer height={20} />

                  <View style={{paddingHorizontal: 15}}>
                    <CaptionedInput
                      caption="Name"
                      placeholder="John Doe"
                      placeholderTextColor="#999"
                      multiline
                      value={values.username}
                      onChangeText={handleChange('username')}
                    />
                    <Spacer height={10} />
                    <CaptionedInput
                      caption="Bio"
                      placeholder="write something..."
                      placeholderTextColor="#999"
                      multiline
                      value={values.bio}
                      onChangeText={handleChange('bio')}
                    />
                    {/* <Spacer height={10} />
                  <CaptionedInput
                  caption="Bio"
                  placeholder="www.madeupsite.com"
                  placeholderTextColor="#999"
                  multiline
                  value={values.bio}
                  onChangeText={handleChange('bio')}
                /> */}
                    <Spacer height={10} />
                    {/* <Button text="Submit" onPress={handleSubmit} /> */}
                  </View>
                </>
              )}
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
    paddingTop: 40,
  },
});
