import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';
import {useTheme} from '../hooks/useTheme';
import {usePagerHandler} from '../hooks/usePagerHandler';
import {ElevatedContainer} from './Themed';

type Props = {
  tabs: string[];
  onPressTab: (index: number) => void;
  mode?: 'outline' | 'contained';
  position: SharedValue<number>;
  offset: SharedValue<number>;
} & ViewProps;

export const PagerTab: React.FC<Props> = ({
  onPressTab,
  tabs,
  children,
  style,
  mode,
  position,
  offset,
  ...props
}) => {
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const {primary, onBackground} = useTheme();

  const onLayout: React.ComponentProps<typeof Animated.Text>['onLayout'] = ({
    nativeEvent,
  }) => {
    setTabWidths(tabWidths.concat(nativeEvent.layout.width));
  };

  // const {textStyles, sliderStyle} = );

  const {sliderStyle, textStyles} = useCallback(
    () =>
      usePagerHandler({
        numberOfChildren: tabs.length,
        position,
        offset,
        tabWidths: (tabWidths.length >= 2 && tabWidths) || [0, 1],
      }),
    [tabWidths],
  )();

  return (
    <>
      <View style={{alignItems: 'center'}}>
        <ElevatedContainer style={[styles.base, {}, style]} {...props}>
          {tabs.map((val, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  alignItems: 'flex-start',
                  // width: 90,
                  justifyContent: 'center',
                }}
                onPress={() => onPressTab(index)}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                  <Animated.Text
                    onLayout={onLayout}
                    allowFontScaling={false}
                    numberOfLines={1}
                    style={[
                      {
                        textAlign: 'center',
                      },
                      textStyles[index],
                    ]}>
                    {val}
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <Animated.View
            style={[
              sliderStyle,
              {
                height: 1.6,
                backgroundColor: primary,
                position: 'absolute',
                bottom: 0,
                left: 15,
                borderRadius: 5,
              },
            ]}></Animated.View>
        </ElevatedContainer>
      </View>
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
