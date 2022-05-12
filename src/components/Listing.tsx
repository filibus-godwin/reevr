import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {ms} from 'react-native-size-matters';
import {VoidFunction} from '../types';
import {Button} from './Button';
import {Spacer} from './Spacer';
import {Body, Info, Title} from './Text';

type Props = {
  title: string;
  description: string;
  amount?: string;
  type: 'Ad' | 'Contest';
  onPressMoreInfo?: VoidFunction;
} & ViewProps;

export const Listing: React.FC<Props> = ({
  title,
  description,
  amount,
  onPressMoreInfo,
  style,
  type,
  ...props
}) => {
  return (
    <>
      <View
        style={
          (styles.base,
          {
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: '#aaaaaa99',
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: ms(140),
            marginRight: 10,
          })
        }>
        <Info style={{}} numberOfLines={1}>
          {type}
        </Info>
        <Spacer height={5} />
        <Title numberOfLines={1}>{title}</Title>
        <Spacer height={5} />
        <Body style={{flex: 1}} numberOfLines={4}>
          {description}
        </Body>
        <Spacer height={5} />
        <Title style={{}}>{amount}</Title>
        <Spacer height={5} />
        <Button
          // theme={{dark: {primary: '#ffffff'}, light: {}}}
          // mode="contained"
          mode="outlined"
          text="More Info"
          onPress={onPressMoreInfo}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
