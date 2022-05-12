import React from 'react';
import {StyleSheet} from 'react-native';
import {VoidFunction} from '../types';
import {CircleAvatar} from './CircleAvatar';
import {Column, Row} from './Layout';
import {Spacer} from './Spacer';
import {Info, Title} from './Text';
import {Touchable} from './Touchable';

type Props = React.ComponentProps<typeof Touchable> & {
  name: string;
  source: React.ComponentProps<typeof CircleAvatar>['imageProps']['source'];
  onPress: VoidFunction;
  bio: string;
  onPressAvatar: VoidFunction;
};

export const Account: React.FC<Props> = ({
  source,
  name,
  onPress,
  bio,
  onPressAvatar,
}) => {
  return (
    <>
      <Touchable onPress={onPress}>
        <Row style={styles.base}>
          <CircleAvatar
            onPress={onPressAvatar}
            imageProps={{source}}
            size={50}
          />
          <Spacer width={10} />
          <Column>
            <Title>{name}</Title>
            <Info>{bio}</Info>
          </Column>
        </Row>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
