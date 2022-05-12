import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {CircleAvatar} from './CircleAvatar';
import {Column} from './Containers';
import {Spacer} from './Spacer';
import {Body, Title} from './Text';

type Props = React.ComponentProps<typeof View> & {
  source: ImageSourcePropType;
  name: string;
  text: string;
};

export const Comment: React.FC<Props> = ({source, name, text}) => {
  return (
    <>
      <View style={styles.base}>
        <CircleAvatar source={source} />
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
