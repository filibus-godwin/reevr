import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Info} from './Text';
import {ThemedContainer} from './ThemedContainer';

export const Tab: React.FC<{}> = () => {
  return (
    <>
      <ThemedContainer style={styles.base}>
        <View style={{flexDirection: 'row'}}>
          <Ta title={'MEDIA'} />
          <Ta title={'POSTS'} active />
          <Ta title={'DEVIATIONS'} />
        </View>
      </ThemedContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'transparent',
  },
});

const Ta = ({title, active}: {title: string; active?: boolean}) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomColor: active ? '#ef9d10' : undefined,
        borderBottomWidth: active ? 0.6 : 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Info style={{color: active ? '#eeeeeecc' : "#eeeeee77"}}>{title}</Info>
    </View>
  );
};
