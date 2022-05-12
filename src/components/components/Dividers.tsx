import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HorizontalDivider: React.FC<React.ComponentProps<typeof View>> = ({
  style,
  children,
  ...props
}) => {
  return (
    <>
      <View
        style={[{height: 0.4, backgroundColor: '#99999999'}, style]}
        {...props}
      />
    </>
  );
};
export const VerticalDivider: React.FC<React.ComponentProps<typeof View>> = ({
  style,
  children,
  ...props
}) => {
  return (
    <>
      <View style={[{width: 0.4, backgroundColor: '#fff'}, style]} {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
