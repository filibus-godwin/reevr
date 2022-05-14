import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {VerticalDivider} from '../../components/Dividers';
import {Spacer} from '../../components/Spacer';
import {Body, Info, Title} from '../../components/Text';
import {useTheme} from '../../hooks/useTheme';
import {LoginStackScreenProps} from '../../types';
import {BaseContainer} from '../../components/Themed';
import {Row} from '../../components/Layout';

export const WelcomeScreen: React.FC<LoginStackScreenProps<'Welcome'>> = ({
  navigation,
}) => {
  const {primary} = useTheme();

  const onPressLogin = () => navigation.navigate('Login');
  const onPressSignUp = () => navigation.navigate('SignUp');
  return (
    <>
      <BaseContainer style={styles.base}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          }}
          style={[
            {
              aspectRatio: 9 / 16,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              overflow: 'hidden',
            },
            StyleSheet.absoluteFill,
          ]}>
          <View
            style={[
              {
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
            ]}>
            <Spacer height={120} />
            {/* 393 */}
            <View style={{paddingHorizontal: 15, marginTop: 0}}>
              <Title style={{fontSize: 100, fontWeight: '900'}}>Reevr</Title>
              <Body style={{marginTop: 0}}>
                Nullam posuere, arcu sit amet vestibulum posuere, massa velit
                semper lectus, sed imperdiet leo lacus id metus. Etiam auctor
                lectus id ligula facilisis, ut facilisis orci mollis. Proin
                bibendum tortor vel magna sollicitudin venenatis.
              </Body>
            </View>
            <Spacer flex={1} />
            <Row style={{alignItems: 'center', justifyContent: 'center'}}>
              <Button
                text="LOGIN"
                style={{alignSelf: 'center'}}
                onPress={onPressLogin}
              />
              <VerticalDivider style={{height: 20}} />
              <Button
                text="SIGN UP"
                style={{alignSelf: 'center'}}
                onPress={onPressSignUp}
              />
            </Row>
            <Spacer height={50} />
            <View style={{marginBottom: 90, alignSelf: 'center'}}>
              <Info>
                By joining you agree to Reevr's{' '}
                <Info style={{color: primary}}>terms and conditions</Info>
              </Info>
            </View>
          </View>
        </ImageBackground>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
