import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CircleAvatar} from './CircleAvatar';
import {Column, Row} from './Containers';
import {Spacer} from './Spacer';
import {Info, Title} from './Text';
import {Touchable} from './Touchable';

type Props = React.ComponentProps<typeof Touchable> & {
  name: string;
  source: React.ComponentProps<typeof CircleAvatar>['source'];
  info: string[];
};

export const Account: React.FC<Props> = ({source, name, info}) => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <Row style={styles.base}>
          <CircleAvatar source={source} size={40} />
          <Spacer width={10} />
          <Column>
            <Title>{name}</Title>
            <Info>Artist | Singer | Journalist</Info>
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
