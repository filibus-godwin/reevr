import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from '../../components/Appbar';
import {Button} from '../../components/Button';
import {CaptionedInput} from '../../components/CaptionedInput';
import {DatePicker} from '../../components/DatePicker';
import {CaptionedSection} from '../../components/Section';
import {Spacer} from '../../components/Spacer';
import {Info, Title} from '../../components/Text';
import {BaseContainer} from '../../components/Themed';
import {useTheme} from '../../hooks/useTheme';
import {LoginStackScreenProps} from '../../types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useStore} from '../../store/store';
import {useAuth} from '../../shared-hooks/useAuth';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(30, 'Too Long')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Too short')
    .max(30, 'Too Long')
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

export const SignUpScreen: React.FC<LoginStackScreenProps<'SignUp'>> = ({
  navigation,
  route,
}) => {
  const {primary} = useTheme();

  const [loading, setLoading] = useState(false);
  const updateUser = useStore(state => state.updateUser);
  const toggleLoggedIn = useStore(state => state.toggleLoggedIn);
  const {register} = useAuth();

  const onPressLogin = () => navigation.replace('Login');
  const onPressTermsOfService = () =>
    ToastAndroid.show('terms of service', ToastAndroid.LONG);
  const onPressPrivacyPolicy = () =>
    ToastAndroid.show('privacy policy', ToastAndroid.LONG);

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Action name="close" onPress={navigation.goBack} />
      </Appbar.Header>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <BaseContainer style={styles.base}>
          <ScrollView>
            <Spacer height={120} />
            <Title style={{fontSize: 40, fontWeight: '900'}}>Sign up</Title>
            <Spacer height={20} />
            <Info
              parse={[
                {
                  pattern: /Log in/,
                  style: {color: primary},
                  onPress: onPressLogin,
                },
              ]}>
              Already a member?, Log in
            </Info>
            <Formik
              initialValues={{
                email: '',
                password: '',
                username: '',
                confirmPassword: '',
                year: '',
                month: '',
                day: '',
              }}
              validateOnChange
              validationSchema={DisplayingErrorMessagesSchema}
              onSubmit={async ({
                username,
                password,
                email,
                year,
                month,
                day,
              }) => {
                setLoading(true);

                register({
                  email,
                  password,
                  username,
                  dateOfBirth: `${year}-${month}-${day}`,
                })
                  .then(() => toggleLoggedIn())
                  .catch(e => console.warn(e));
              }}>
              {({
                values,
                initialValues,
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <>
                  <>
                    <Spacer height={20} />
                    <CaptionedInput
                      caption="Pick a username"
                      placeholder={initialValues.username}
                      value={values.username}
                      onChangeText={handleChange('username')}
                      error={errors.username}
                    />
                    <Spacer height={25} />
                    <CaptionedInput
                      caption="Email"
                      placeholder={initialValues.email}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      error={errors.email}
                      keyboardType="email-address"
                    />
                    <Spacer height={25} />
                    <CaptionedInput
                      caption="Password"
                      placeholder={initialValues.password}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      error={errors.password}
                      secureTextEntry
                    />
                    <Spacer height={25} />
                    <CaptionedInput
                      caption="Confirm password"
                      placeholder={initialValues.confirmPassword}
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      error={errors.confirmPassword}
                      secureTextEntry
                    />
                    <Spacer height={25} />
                    <CaptionedSection
                      caption="Enter your date of birth"
                      captionStyle={{marginLeft: 0, color: primary}}>
                      <DatePicker
                        onDayChange={handleChange('day')}
                        onMonthChange={handleChange('month')}
                        onYearChange={handleChange('year')}
                      />
                    </CaptionedSection>
                    <Spacer height={20} />
                    <Button
                      text="Submit"
                      onPress={handleSubmit}
                      loading={loading}
                    />
                  </>
                </>
              )}
            </Formik>
            <Spacer height={40} />
            <>
              <Info
                style={{marginBottom: 0}}
                parse={[
                  {
                    pattern: /Terms of Service/i,
                    style: {color: primary},
                    onPress: onPressTermsOfService,
                  },
                  {
                    pattern: /Privacy Policy/i,
                    style: {color: primary},
                    onPress: onPressPrivacyPolicy,
                  },
                ]}>
                By clicking Log in, I confirm that i have read and agree to the
                Reevr Terms of Service, Privacy Policy , and to receive emails
                and updates.
              </Info>
            </>
          </ScrollView>
        </BaseContainer>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  base: {flex: 1, paddingHorizontal: 25},
  margin: {
    marginBottom: 25,
  },
  header: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});
