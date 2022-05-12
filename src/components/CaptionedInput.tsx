import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useColorScheme} from '../hooks/useColorScheme';
import {useTheme} from '../hooks/useTheme';
import {getTextInputTextColor} from '../constants/schemes';
import {Spacer} from './Spacer';
import {Info} from './Text';
import Color from 'color';

type Props = {
  caption: string;
  error?: string;
} & React.ComponentProps<typeof TextInput>;

export const CaptionedInput: React.FC<Props> = ({
  caption,
  style,
  error,
  ...props
}) => {
  const {primary} = useTheme();
  const mode = useColorScheme();
  const backgroundColor =
    mode == 'dark' ? `rgba(200,200,200,${0.2})` : `rgba(0,0,0,${0.09})`;
  const color = getTextInputTextColor();
  return (
    <>
      <Info style={{color: primary}}>{caption}</Info>
      <Spacer height={2} />
      <TextInput
        selectionColor={Color(primary).alpha(0.5).rgb().toString()}
        style={[
          {
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 4,
            backgroundColor,
            color,
          },
          style,
        ]}
        {...props}
      />
      {error !== undefined && (
        <>
          <Spacer height={1} />
          <Info style={{color: '#aa0000', fontSize: 12}}>{error}</Info>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
