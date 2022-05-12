import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '../../hooks/useTheme';
import {VoidFunction} from '../../type';
import {Button} from '../Button';
import {Row} from '../Containers';
import {Spacer} from '../Spacer';
import {Body, Info, Title} from '../Text';
import {ThemedView} from '../ThemedView';
import {ProfileMeta} from './ProfileMeta';

type Props = React.ComponentProps<typeof View> & {
  name: string;
  occupation: string[];
  bio: string;
  numberOfFollowers: string;
  numberOfPosts: string;
  personal?: boolean;
  onPressMoreInfo?: VoidFunction;
  onPressFollow?: VoidFunction;
  onPressMessage?: VoidFunction;
  onPressHire?: VoidFunction;
  onPressEditProfile?: VoidFunction;
  nameStyle?: React.ComponentProps<typeof Animated.Text>['style'];
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
  const {
    colors: {primary},
  } = useTheme();
  return (
    <>
      <ThemedView
        style={[{paddingHorizontal: 15, marginTop: 20}, style]}
        {...props}>
        <Title style={[nameStyle, {fontSize: 20, fontWeight: '700'}]}>
          {name}
        </Title>
        <Spacer height={0} />
        <Info style={{fontSize: 13}}>
          {occupation.map((oc, index) => {
            if (index == occupation.length - 1) return oc;
            return oc + ' • ';
          })}
        </Info>
        <Spacer height={6} />
        <Body style={{fontSize: 13.3, fontWeight: '400'}}>{bio}</Body>
        <Spacer height={5} />
        <Row>
          <ProfileMeta title="Followers" data={numberOfFollowers} />
          <Spacer width={10} />
          <ProfileMeta title="Posts" data={numberOfPosts} />
        </Row>
        <Spacer height={10} />
        {personal && (
          <Button
            text="Edit Profile"
            mode="outlined"
            onPress={onPressEditProfile}
          />
        )}
        {!personal && (
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
      </ThemedView>
    </>
  );
};
