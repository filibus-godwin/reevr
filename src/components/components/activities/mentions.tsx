import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from '../Button';
import {CircleAvatar} from '../CircleAvatar';
import {Spacer} from '../Spacer';
import {Body, Info, Title} from '../Text';
import {Touchable} from '../Touchable';

export const Mentions: React.FC<{}> = () => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <View style={styles.base}>
          <CircleAvatar
            imageProps={{source: {uri: 'https://source.unsplash.com/random/5'}}}
            size={40}
          />
          <Spacer width={10} />
          <Title style={{flex: 1}}>
            Sam Sivan <Body>mentioned you in a comment.</Body>
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
