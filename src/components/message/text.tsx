import React from 'react';
import {StyleSheet, TextProps, View, ViewProps} from 'react-native';
import {Body} from '../Text';

type Props = {text?: string} & TextProps;

export const Text: React.FC<Props> = ({text, style, ...props}) => {
  if (text == undefined) return null;
  return (
    <>
      <Body
        style={[{opacity: 1, color: '#fff', fontSize: 15}, style]}
        {...props}>
        {text}
      </Body>
    </>
  );
};
