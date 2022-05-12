import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {CircleAvatar} from '../CircleAvatar';
import {Column, Row} from '../Layout';
import {ProfileMeta} from '../profile/ProfileMeta';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';
import {TouchableImage} from '../TouchableImage';
import {VoteButton} from './VoteButton';

type EntryProps = {
  avatarUri: string;
  name: string;
  tag?: string;
  entryUri: string;
  votes: number;
  voted?: boolean;
} & React.ComponentProps<typeof View>;

export const ContestEntry: React.FC<EntryProps> = ({
  avatarUri,
  name,
  tag,
  entryUri,
  votes,
  style,
  voted,
  ...props
}) => {
  const {primary} = useTheme();
  return (
    <>
      <View style={[styles.base, {}, style]}>
        <Row>
          <CircleAvatar imageProps={{source: {uri: avatarUri}}} size={40} />
          <Spacer width={5} />
          <Column style={{flex: 1}}>
            <Title>{name}</Title>
            <Info
              style={{
                color: primary,
              }}>
              #{tag}
            </Info>
            {/* <Info>
            Donec finibus non orci vitae vulputate. Mauris et posuere est.
            Nullam sed nibh ut mi eleifend ultricies. Cras a finibus odio. Fusce
            euismod nibh mauris Nullam sed nibh ut mi eleifend ultricies. Cras a
            finibus odio. Fusce euismod nibh mauris
          </Info> */}
          </Column>
        </Row>
        <Spacer height={5} />
        <Column style={{flex: 1}}>
          <TouchableImage
            imageProps={{
              source: {uri: entryUri, priority: 'high'},
              style: {borderRadius: 5},
            }}
            containerStyle={{flex: 1, borderRadius: 5}}
            contentContainerStyle={{borderRadius: 5}}
            style={{
              borderRadius: 5,
              flex: 1,
            }}
          />
          <Row
            style={{
              position: 'absolute',
              borderBottomRightRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <ProfileMeta title="votes" data={votes} />
          </Row>
        </Column>
        <Spacer height={5} />
        <VoteButton name={name} voted={voted} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
