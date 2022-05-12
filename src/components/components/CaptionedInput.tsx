import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useColorScheme} from '../hooks/useColorScheme';
import {useTheme} from '../hooks/useTheme';
import {Spacer} from './Spacer';
import {Info} from './Text';
import {ThemedContainer} from './ThemedContainer';

type Props = {
  caption: string;
} & React.ComponentProps<typeof TextInput>;

export const CaptionedInput: React.FC<Props> = ({caption, style, ...props}) => {
  const {
    colors: {primary},
  } = useTheme();
  const mode = useColorScheme();
  const backgroundColor =
    mode == 'dark' ? `rgba(200,200,200,${0.2})` : `rgba(0,0,0,${0.09})`;
  return (
    <>
      <Info style={{color: primary}}>{caption}</Info>
      <Spacer height={2} />
      <TextInput
        style={[
          {
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 4,
            backgroundColor,
          },
          style,
        ]}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
