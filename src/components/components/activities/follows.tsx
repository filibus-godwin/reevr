import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {CircleAvatar} from '../CircleAvatar';
import {Spacer} from '../Spacer';
import {Body, Title} from '../Text';
import {Touchable} from '../Touchable';

export const Follows: React.FC<{}> = () => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <View style={styles.base}>
          <CircleAvatar
            imageProps={{source: {uri: 'https://source.unsplash.com/random/1'}}}
            size={40}
          />
          <Spacer width={10} />
          <Title style={{flex: 1}}>
            Giovanni <Body>started following you</Body>
          </Title>
          <Button text="follow" mode="text" />
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
