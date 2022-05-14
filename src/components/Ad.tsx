import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from './Layout';
import {Body} from './Text';
import {Touchable} from './Touchable';

type Props = {
  date: string;
};

export const Ad: React.FC<Props> = ({date}) => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <View style={styles.base}>
          <Body numberOfLines={3}>
            Curabitur molestie tempus sem vel ultricies. Pellentesque arcu erat,
            hendrerit non nibh ac, laoreet ultricies odio. Sed sit amet diam
            efficitur, congue mauris quis, dictum mi. Maecenas sodales nulla in
            finibus ultricies.
          </Body>
          <Row></Row>
        </View>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
