import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CircleAvatar} from '../CircleAvatar';
import {Spacer} from '../Spacer';
import {Body, Title} from '../Text';
import {Touchable} from '../Touchable';

export const Reactions: React.FC<{}> = () => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <View style={styles.base}>
          <CircleAvatar
            imageProps={{source: {uri: 'https://source.unsplash.com/random/0'}}}
            size={40}
          />
          <Spacer width={10} />
          <Title style={{flex: 1}}>
            Sam Sivan <Body>and</Body> 30 others <Body>liked your post.</Body>
          </Title>
        </View>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
