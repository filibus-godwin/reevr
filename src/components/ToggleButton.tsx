import React, {useState} from 'react';
import {StyleSheet, View, Switch, ColorValue} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {ThemedMaterialCommunityIcons} from './Themed';

export const ToggleButton: React.FC<{toggled?: boolean; size?: number}> = ({
  toggled,
  size,
}) => {
  const [toggledd, setToggled] = useState(false);
  const {secondary, primary} = useTheme();
  return (
    <>
      {toggled ? (
        <ThemedMaterialCommunityIcons
          name="check-circle"
          color={primary as ColorValue}
          size={size}
        />
      ) : (
        <ThemedMaterialCommunityIcons name="check-circle-outline" size={size} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // borderWidth: 1,
    // borderRadius: 15,
    // width: 30,
    // height: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: 'white',
  },
});
