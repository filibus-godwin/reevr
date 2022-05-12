import React from 'react';
import {StyleSheet} from 'react-native';
import {MessageStatus} from '../../types';
import {CircleAvatar} from '../CircleAvatar';
import {Column, Row} from '../Layout';
import {Spacer} from '../Spacer';
import {Body, Info, Title} from '../Text';
import {ThemedMaterialCommunityIcons} from '../Themed';
import {Touchable} from '../Touchable';

type Props = React.ComponentProps<typeof Touchable> & {
  name: string;
  avatarUri: string;
  preview: string;
  status: MessageStatus;
};

export const Conversation: React.FC<Props> = ({
  style,
  name,
  avatarUri,
  preview,
  status,
  ...props
}) => {
  return (
    <>
      <Touchable style={[styles.base, style]} {...props}>
        <Row>
          <CircleAvatar imageProps={{source: {uri: avatarUri}}} size={46} />
          <Spacer width={10} />
          <Column style={{flex: 1}}>
            <Row style={{alignItems: 'center'}}>
              <Title style={{flex: 1}}>{name}</Title>
              <Info>Yesterday</Info>
            </Row>
            <Row style={{alignItems: 'center'}}>
              <Body numberOfLines={2} ellipsizeMode="tail" style={{flex: 1}}>
                {preview}
              </Body>
              {getIconName(status)}
            </Row>
          </Column>
        </Row>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    height: 70,
    justifyContent: 'center',
  },
});

const getIconName = (status: MessageStatus) => {
  switch (status) {
    case 'delivered':
      return (
        <ThemedMaterialCommunityIcons
          name="checkbox-multiple-marked-circle"
          color={'#aaaaff'}
          size={18}
        />
      );
    case 'failed':
      return (
        <ThemedMaterialCommunityIcons
          name="checkbox-blank-off"
          color={'#aaaaff'}
          size={18}
        />
      );
    case 'read':
      return (
        <ThemedMaterialCommunityIcons
          name="checkbox-multiple-marked-circle"
          color={'#7777dd'}
          size={18}
        />
      );
    case 'sending':
      return (
        <ThemedMaterialCommunityIcons
          name="timer"
          color={'#aaaaff'}
          size={18}
        />
      );
    case 'sent':
      return (
        <ThemedMaterialCommunityIcons
          name="checkbox-multiple-marked-circle"
          color={'#aaaaff'}
          size={18}
        />
      );
    default:
      return (
        <ThemedMaterialCommunityIcons
          name="checkbox-intermediate"
          color={'#aaaaff'}
          size={18}
        />
      );
  }
};
