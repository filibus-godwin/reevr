import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Touchable} from '../Touchable';
import ParsedText from 'react-native-parsed-text';
import Color from 'color';

export const TileText: React.FC<
  {
    text?: string;
  } & React.ComponentProps<typeof Touchable>
> = ({text, style, ...props}) => {
  if (text == undefined) return null;
  const {secondary, primary, text: textColor} = useTheme();
  return (
    <>
      <Touchable
        style={[
          {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingVertical: 4,
            borderColor: '#EEE',
            // borderWidth: 0.4,
            // paddingHorizontal: 10,
          },
          style,
        ]}
        {...props}>
        {text.length > 0 && (
          <ParsedText
            parse={[
              {
                pattern: /^@[a-zA-Z0-9]*/,
                style: {color: primary},
                onPress: () => {},
              },
              {
                pattern: /#[a-zA-Z0-9]*/,
                style: {color: primary},
                onPress: () => {},
              },
            ]}
            style={{
              fontSize: 13.2,
              // paddingHorizontal: 4,
              color: Color(textColor).alpha(0.7).toString(),
            }}
            numberOfLines={6}>
            {text}
          </ParsedText>
        )}
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
