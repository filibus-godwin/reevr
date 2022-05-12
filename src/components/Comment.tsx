import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {CircleAvatar} from './CircleAvatar';
import {Column} from './Layout';
import {Spacer} from './Spacer';
import {Body, Title} from './Text';

type Props = React.ComponentProps<typeof View> & {
  source: React.ComponentProps<typeof CircleAvatar>['imageProps']['source'];
  name: string;
  text: string;
};

export const Comment: React.FC<Props> = ({source, name, text}) => {
  return (
    <>
      <View style={styles.base}>
        <CircleAvatar imageProps={{source}} />
        <Spacer width={10} />
        <Column style={{flex: 1}}>
          <Title>{name}</Title>
          <Spacer height={5} />
          <Body>{text}</Body>
          <Spacer height={10} />
          {/* <Divider /> */}
        </Column>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
