import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '../../hooks/useTheme';
import {VoidFunction} from '../../types';
import {Button} from '../Button';
import {Row} from '../Layout';
import {Spacer} from '../Spacer';
import {Body, Info, Title} from '../Text';
import {BaseContainer, ElevatedContainer} from '../Themed';
import {ProfileMeta} from './ProfileMeta';

type Props = React.ComponentProps<typeof View> & {
  name?: string;
  occupation?: string[];
  bio?: string;
  numberOfFollowers?: string | number;
  numberOfPosts?: string | number;
  personal?: boolean;
  onPressMoreInfo?: VoidFunction;
  onPressFollow?: VoidFunction;
  onPressMessage?: VoidFunction;
  onPressHire?: VoidFunction;
  onPressEditProfile?: VoidFunction;
  nameStyle?: React.ComponentProps<typeof Text>['style'];
};

export const ProfileInfo: React.FC<Props> = ({
  name,
  occupation,
  bio,
  numberOfFollowers,
  numberOfPosts,
  personal,
  onPressMoreInfo,
  onPressFollow,
  onPressMessage,
  onPressHire,
  onPressEditProfile,
  style,
  nameStyle,
  ...props
}) => {
  const {primary, surface} = useTheme();
  const contentLoaded = name !== undefined;
  const bg = name ? 'transparent' : surface;
  return (
    <>
      <BaseContainer
        style={[{paddingHorizontal: 15, marginTop: 20}, style]}
        {...props}>
        <ElevatedContainer
          transparent
          style={{alignSelf: 'flex-start', minWidth: 200}}>
          <Title
            style={[
              nameStyle,
              {
                fontSize: 20,
                fontWeight: '700',
                alignSelf: 'flex-start',
              },
            ]}>
            {name || ' '}
          </Title>
          <Spacer height={1} />
          <Info
            style={{
              fontSize: 13,
            }}>
            {occupation?.map((oc, index) => {
              if (index == occupation?.length - 1) return oc;
              return oc + ' • ';
            }) || '                                         '}
          </Info>
          <Spacer height={6} />
          <Body
            style={{
              fontSize: 13.3,
              fontWeight: '400',
              alignSelf: 'flex-start',
            }}>
            {bio || ' \n'}
          </Body>
          <Spacer height={5} />
        </ElevatedContainer>
        <Row>
          <ElevatedContainer
            style={{alignSelf: 'flex-start', minWidth: 70}}
            transparent>
            <ProfileMeta
              title={contentLoaded ? 'Followers' : ''}
              data={contentLoaded ? (numberOfFollowers as string) : ' '}
            />
          </ElevatedContainer>
          <Spacer width={contentLoaded ? 10 : 0.6} />
          <ElevatedContainer
            style={{alignSelf: 'flex-start', minWidth: 90}}
            transparent>
            <ProfileMeta
              title={contentLoaded ? 'Posts' : ''}
              data={contentLoaded ? (numberOfPosts as string) : ' '}
            />
          </ElevatedContainer>
        </Row>
        <Spacer height={10} />
        {personal && contentLoaded && (
          <Button
            text="Edit Profile"
            mode="outlined"
            onPress={onPressEditProfile}
          />
        )}
        {!personal && contentLoaded && (
          <>
            <Button
              text="More INFO"
              mode="outlined"
              onPress={onPressMoreInfo}
            />
            <Spacer height={10} />
            <Row style={{flex: 1}}>
              <Button text="Follow" mode="outlined" onPress={onPressFollow} />
              <Spacer width={10} />
              <Button text="Message" mode="outlined" onPress={onPressMessage} />
              <Spacer width={10} />
              <Button
                text="Hire"
                mode="contained"
                onPress={onPressHire}
                style={{flex: 1}}
              />
            </Row>
          </>
        )}
      </BaseContainer>
    </>
  );
};
