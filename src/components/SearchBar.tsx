import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getTextInputTextColor} from '../constants/schemes';
import {VoidFunction} from '../types';
import {IconButton} from './IconButton';
import {Spacer} from './Spacer';
import {ThemedMaterialIcons} from './Themed';

export const SearchBar: React.FC<{onSubmit?: VoidFunction}> = ({onSubmit}) => {
  const {top} = useSafeAreaInsets();
  const textColor = getTextInputTextColor();
  return (
    <>
      <View
        style={[
          styles.base,
          {
            paddingTop: top,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
          },
        ]}>
        <ThemedMaterialIcons name="search" />
        <Spacer width={10} />
        <TextInput
          placeholder="search"
          placeholderTextColor={'#999'}
          style={{color: textColor, flex: 1}}
          selectionColor={textColor}
          returnKeyLabel="search"
          returnKeyType="search"
          onSubmitEditing={onSubmit}
        />
        <IconButton name="close" onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
