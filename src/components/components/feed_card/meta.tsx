import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VoidFunction} from '../../type';
import {IconButton} from '../IconButton';
import {ThemedMaterialIcons} from '../Icons';
import {Spacer} from '../Spacer';
import {Info} from '../Text';

export const Meta: React.FC<{
  name: React.ComponentProps<typeof IconButton>['name'];
  data: string | number;
  onPress: VoidFunction;
  color?: string;
}> = ({name, data, onPress, color, ...props}) => {
  // const iconColor = getIconColor()
  return (
    <>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
          },
        ]}>
        <ThemedMaterialIcons
          name={name}
          onPress={onPress}
          color={color}
          // style={{opacity: 0.5}}
          size={20}
        />
        <Spacer width={5} />
        <Info style={{fontSize: 13}}>{data}</Info>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
