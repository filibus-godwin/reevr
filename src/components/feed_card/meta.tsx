import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {VoidFunction} from '../../types';
import {IconButton} from '../IconButton';
import {Spacer} from '../Spacer';
import {Info} from '../Text';
import {ThemedMaterialIcons} from '../Themed';

export const Meta: React.FC<{
  name: React.ComponentProps<typeof IconButton>['name'];
  data: string | number;
  onPress: VoidFunction;
  color?: string;
}> = ({name, data, onPress, color, ...props}) => {
  // const iconColor = getIconColor()
  const [loading, setLoading] = useState(false);
  const onMetaPressed = async () => {
    setLoading(true);
    await onPress();
    setLoading(false);
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={onMetaPressed}
        style={{flexDirection: 'row', alignItems: 'center', width: 50}}>
        <ThemedMaterialIcons
          loading={loading}
          name={name}
          color={color}
          // style={{opacity: 0.5}}
          size={24}
        />
        <Spacer width={5} />
        <Info style={{fontSize: 13}}>{data}</Info>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
