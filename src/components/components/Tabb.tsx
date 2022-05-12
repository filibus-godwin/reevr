import Color from 'color';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {VoidFunction} from '../type';
import {ThemedContainer} from './ThemedContainer';
import {Touchable} from './Touchable';

type Props = {
  tabs: string[];
  onPressTab: (index: number) => void;
  activeIndex?: number;
  mode?: 'outline' | 'contained';
} & ViewProps;

export const Tabs: React.FC<Props> = ({
  onPressTab,
  tabs,
  activeIndex,
  children,
  style,
  mode,
  ...props
}) => {
  const {
    colors: {primary, onBackground},
  } = useTheme();

  const backgroundColor = Color(onBackground).alpha(0.03).toString(); //'#eeeeee11';

  return (
    <>
      <ThemedContainer
        style={[styles.base, {backgroundColor}, style]}
        {...props}>
        {tabs.map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
                backgroundColor: activeIndex == index ? primary : 'transparent',
              }}
              onPress={() => onPressTab(index)}>
              <Text
                style={{
                  color:
                    activeIndex == index
                      ? Color(primary).darken(0.5).toString()
                      : Color(onBackground).alpha(0.25).toString(),
                }}>
                {val}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ThemedContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});
