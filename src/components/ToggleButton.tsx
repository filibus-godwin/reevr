import React from 'react';
import { ColorValue} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {ThemedMaterialCommunityIcons} from './Themed';

export const ToggleButton: React.FC<{toggled?: boolean; size?: number}> = ({
  toggled,
  size,
}) => {
  const {primary} = useTheme();
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

