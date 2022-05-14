import Color from 'color';
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import {withTheme} from '../constants/schemes';
import {useColorScheme} from '../hooks/useColorScheme';
import {Theme} from '../types';
import {Spacer} from './Spacer';
import {Body} from './Text';
import {Touchable} from './Touchable';

type Props = {
  title: string;
  theme?: Theme;
  left?: () => React.ReactNode;
} & React.ComponentProps<typeof Touchable>;

export const ListItem: React.FC<Props> = ({
  title,
  theme,
  children,
  underlayColor: uColor,
  style,
  left,
  ...props
}) => {
  const {onBackground} = withTheme(theme);
  const mode = useColorScheme();
  const underlayColor =
    mode == 'dark'
      ? Color(onBackground).alpha(0.1).rgb().toString()
      : Color(onBackground).alpha(0.1).rgb().toString();
  return (
    <>
      <TouchableHighlight
        style={[styles.base, style]}
        underlayColor={uColor || underlayColor}
        {...props}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Body style={{fontSize: 17}}>{title}</Body>
          <Spacer flex={1} />
          {left && left()}
        </View>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 19,
  },
});
