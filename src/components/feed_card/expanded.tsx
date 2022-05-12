import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  FlatListProps,
  Pressable,
  View,
  ViewProps,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../hooks/useTheme';
import {Spacer} from '../Spacer';
import {Body} from '../Text';
import {BaseContainer, ThemedMaterialCommunityIcons} from '../Themed';
import {TileFooter} from './footer';
import {TileHeader} from './header';
import {TileMedia} from './media';
import {TileText} from './text';

type Props = Omit<
  React.ComponentProps<typeof TileMedia>,
  'style' | 'aspectRatio'
> &
  Omit<React.ComponentProps<typeof TileHeader>, 'source'> &
  React.ComponentProps<typeof TileText> &
  React.ComponentProps<typeof TileFooter>;

const AnimatedFlatList =
  Animated.createAnimatedComponent<FlatListProps<{}>>(FlatList);

export const ExpandedFeedCard: React.FC<Props> = ({
  media,
  text,
  sponsored,
  liked,
  bookmarked,
  views,
  timestamp,
  avatarUri,
  comments,
  likes,
  name,
  onPressBookmark,
  onPressComment,
  onPressLike,
  onPressMenu,
  onPressName,
  onPressShare,
}) => {
  const {width, height} = Dimensions.get('screen');
  const [sectionHeight, setSectionHeight] = useState(100);
  const {bottom} = useSafeAreaInsets();
  console.log(bottom);
  const {background} = useTheme();

  const onLayout: ViewProps['onLayout'] = ({nativeEvent}) =>
    setSectionHeight(nativeEvent.layout.height);

  const transY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: ({translationY}) => {
      transY.value = translationY;
      console.log(translationY);
    },
    onEnd: ({translationY}) => {
      console.log(translationY, sectionHeight);
      if (-translationY <= sectionHeight / 2) transY.value = withTiming(0);
      if (-translationY >= sectionHeight / 2)
        transY.value = withTiming(-sectionHeight);
    },
  });

  const bottomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            -transY.value,
            [0, sectionHeight],
            [0, -sectionHeight],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        -transY.value,
        [0, sectionHeight],
        [1, 0.2],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View style={[{}]}>
        <PanGestureHandler
          activeOffsetY={[-10, 10]}
          onGestureEvent={gestureHandler}>
          <Animated.View style={imageStyle}>
            <BaseContainer>
              <FlatList
                data={media}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <FastImage
                    source={{uri: item.uri}}
                    style={{width, height: '100%'}}
                    resizeMode="center"
                  />
                )}
                horizontal
                pagingEnabled
                style={{aspectRatio: 9 / 16}}
              />
            </BaseContainer>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
      <Animated.View
        style={[
          {
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // bottom: -sectionHeight,
          },
          bottomStyle,
        ]}
        onLayout={onLayout}>
        <BaseContainer style={{paddingHorizontal: 15}}>
          <Spacer height={10} />
          <ThemedMaterialCommunityIcons
            name="chevron-up"
            style={{alignSelf: 'center'}}
          />
          <TileFooter
            {...{
              liked,
              bookmarked,
              onPressShare,
              onPressComment,
              onPressLike,
              onPressBookmark,
              comments,
              likes,
              views,
            }}
          />
          <Spacer height={5} />
          <Body>{text}</Body>
          <Spacer height={10} />
        </BaseContainer>
      </Animated.View>
      <Pressable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: -1,
        }}
      />
    </View>
  );
};

const Dot: React.FC<{}> = () => {
  return <Animated.View></Animated.View>;
};
