import React, {useContext, useState} from 'react';
import {StyleSheet, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Appbar} from '../../components/Appbar';
import {Button} from '../../components/Button';
import {CaptionedInput} from '../../components/CaptionedInput';
import {Spacer} from '../../components/Spacer';
import {Info, Title} from '../../components/Text';
import {BaseContainer} from '../../components/Themed';
import {useTheme} from '../../hooks/useTheme';
import {useStore} from '../../store/store';
import {LoginStackScreenProps} from '../../types';
import {Formik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../srstore/rstore';
import {useAxiosInstance} from '../../hooks/useAxiosInstance';
import {addCredentials, Credentials} from '../../srstore/slices/credentials';
import {AxiosResponse} from 'axios';
import encryptedStore from 'react-native-encrypted-storage';

export const LoginScreen: React.FC<LoginStackScreenProps<'Login'>> = ({
  navigation,
  route,
}) => {
  const {top} = useSafeAreaInsets();
  const {primary} = useTheme();
  const [loading, setLoading] = useState(false);
  const updateUser = useStore(state => state.updateUser);
  const dispatch = useAppDispatch();
  const axios = useAxiosInstance().axios;

  const onPressForgotPassword = () =>
    ToastAndroid.show('forgot password', ToastAndroid.LONG);
  const onPressJoin = () => ToastAndroid.show('join op', ToastAndroid.LONG);
  const onPressTermsOfService = () =>
    ToastAndroid.show('terms of service', ToastAndroid.LONG);
  const onPressPrivacyPolicy = () =>
    ToastAndroid.show('privacy policy', ToastAndroid.LONG);

  const toggle = useStore(state => state.toggleLoggedIn);

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);

    axios
      .post<{}, AxiosResponse<Credentials>>('/login', {email, password})
      .then(e => {
        dispatch(addCredentials(e.data));
        const stringifiedCredentials = JSON.stringify(e.data);
        encryptedStore.setItem('credentials', stringifiedCredentials);
        toggle();
      })
      .catch(e => {
        console.warn(e);
        setLoading(false);
      });
    // authManager
    //   ?.login({email, password})
    //   .then(e => {
    //     // console.log(e.data);
    //     // updateUser({
    //     //   accessToken: e.data.accessToken,
    //     //   refreshToken: e.data.refreshToken,
    //     //   id: e.data.id,
    //     //   streamToken: e.data.streamToken,
    //     // });
    //   })
    //   .catch(e => {
    //     console.warn(e);
    //     setLoading(false);
    //   });
  };

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action name="close" onPress={navigation.goBack} />
      </Appbar.Header>
      <BaseContainer style={[styles.base, {paddingTop: top}]}>
        <KeyboardAvoidingView
          style={{paddingHorizontal: 25, flex: 1}}
          behavior="height">
          <ScrollView contentContainerStyle={{flex: 1}}>
            <Spacer height={120} />
            <Title style={{fontSize: 40, fontWeight: '900'}}>Log in</Title>
            <Spacer height={20} />
            <Info>
              Not a member?,{' '}
              <Info onPress={onPressJoin} style={{color: primary}}>
                Join
              </Info>
            </Info>
            <Spacer height={20} />
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={onSubmit}>
              {({errors, handleChange, handleSubmit, values}) => (
                <>
                  <CaptionedInput
                    caption="Email"
                    value={values.email}
                    placeholder="johndoe@email.com"
                    onChangeText={handleChange('email')}
                  />
                  <Spacer height={25} />
                  <CaptionedInput
                    secureTextEntry
                    caption={'Password'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                  <Spacer height={20} />
                  <Info
                    onPress={onPressForgotPassword}
                    style={{color: primary}}>
                    Forgot password?
                  </Info>
                  <Button
                    text="LOGIN"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </>
              )}
            </Formik>
            <Spacer flex={1} />
            <Info style={{marginBottom: 0}}>
              By clicking Log in, I confirm that i have read and agree to the
              Reevr{' '}
              <Info onPress={onPressTermsOfService} style={{color: primary}}>
                Terms of Service
              </Info>
              ,{' '}
              <Info onPress={onPressPrivacyPolicy} style={{color: primary}}>
                Privacy Policy
              </Info>
              , and to receive emails and updates.
            </Info>
            <Spacer height={90} />
          </ScrollView>
        </KeyboardAvoidingView>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  appbar: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
});
