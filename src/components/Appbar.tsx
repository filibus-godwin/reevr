import React from 'react';
import Color from 'color';
import {Dimensions, Text, ViewProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {withTheme} from '../constants/schemes';
import {useColorScheme} from '../hooks/useColorScheme';
import {useTheme} from '../hooks/useTheme';
import {IconButton} from './IconButton';

export type AppbarProps = {} & React.ComponentProps<typeof Animated.View>;

const Header: React.FC<AppbarProps> = ({style, children, ...props}) => {
  const {width} = Dimensions.get('screen');
  const {top} = useSafeAreaInsets();
  const {background} = useTheme();

  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor: background,
            width,
            height: 50 + top,
            paddingTop: top,
            // elevation: 4,
            flexDirection: 'row',
            alignItems: 'center',
          },
          style,
        ]}
        {...props}>
        {children}
      </Animated.View>
    </>
  );
};

const BackAction: React.FC<
  Omit<React.ComponentProps<typeof IconButton>, 'name'>
> = props => {
  return <IconButton name="arrow-back" {...props} />;
};

const Action: React.FC<React.ComponentProps<typeof IconButton>> = props => {
  return <IconButton size={24} {...props} />;
};

const Content: React.FC<
  {
    title: string;
    textStyle?: React.ComponentProps<typeof Animated.Text>['style'];
    subtitle?: string;
  } & ViewProps
> = ({title, textStyle, subtitle, ...props}) => {
  const {text, onBackground} = withTheme({light: {}, dark: {}});
  const theme = useColorScheme();
  const titleColor =
    theme == 'dark'
      ? Color(onBackground).alpha(0.9).rgb().toString()
      : onBackground;
  const subtitleColor =
    theme == 'dark'
      ? Color(onBackground).alpha(0.5).rgb().toString()
      : onBackground;
  return (
    <Animated.View style={{marginHorizontal: 15}} {...props}>
      <Animated.Text
        style={[
          {fontSize: 20, fontWeight: '700', color: titleColor},
          textStyle,
        ]}>
        {title}
      </Animated.Text>
      {subtitle !== undefined && (
        <Text style={{color: subtitleColor, fontSize: 12}}>{subtitle}</Text>
      )}
    </Animated.View>
  );
};

export const Appbar = {
  Header,
  BackAction,
  Action,
  Content,
};
