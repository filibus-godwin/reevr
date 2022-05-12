import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Spacer} from '../Spacer';
import {Info} from '../Text';

export const CommentTextInput: React.FC<{}> = () => {
  return (
    <>
      <View style={styles.base}>
        {/* <MaterialIcons name="chat-bubble" color={"#ddd"} size={20} /> */}
        <Info style={{}}>15 hrs ago</Info>
        <Spacer flex={1} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5,
  },
});
