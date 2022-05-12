import React, {createRef, useState} from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useTheme} from '../hooks/useTheme';
import {VoidFunction} from '../type';
import {Row} from './Containers';
import {HorizontalDivider} from './Dividers';
import {ThemedMaterialIcons} from './Icons';
import {ListItem} from './ListItem';
import {Info} from './Text';
import {ThemedContainer} from './ThemedContainer';
import {ThemedView} from './ThemedView';

type Props = {
  placeholder?: string;

  disabled?: boolean;
} & ViewProps;

export const Dropdown: React.FC<Props> = ({
  placeholder,
  disabled,
  ...props
}) => {
  const {width, height} = Dimensions.get('screen');
  const {
    colors: {primary},
    roundness,
  } = useTheme();

  const touchable = createRef<TouchableOpacity>();
  const [dim, setDim] = useState<{width: number; pageY: number}>({
    width: 0,
    pageY: 0,
  });
  const [visible, setVisible] = useState(false);

  const onPress = () => {
    touchable.current?.measure((x, y, width, height, pageX, pageY) => {
      setDim({width, pageY});
    });
    setVisible(true);
  };

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(visible ? 250 : 0, {duration: 200}),
    };
  });

  const renderModal = () => {
    return (
      <Modal transparent visible={visible} style={{flex: 1}}>
        <Pressable
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          onPress={() => setVisible(!visible)}></Pressable>
        <ThemedView
          style={{
            height: 250,
          }}>
          <ThemedContainer
            style={{
              flex: 1,
              // backgroundColor: primary,
              marginHorizontal: 15,
              borderRadius: 5,
            }}>
            <Animated.View style={[style]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ListItem title="Sandwich" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Cocktail" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Sandwich" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Cocktail" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Sandwich" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Cocktail" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Sandwich" />
                {/* <HorizontalDivider /> */}
                <ListItem title="Cocktail" />
              </ScrollView>
            </Animated.View>
          </ThemedContainer>
        </ThemedView>
        <Pressable
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          onPress={() => setVisible(!visible)}></Pressable>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity ref={touchable} onPress={onPress} style={{flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: roundness,
            borderColor: primary,
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}>
          <Row>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Info>{placeholder}</Info>
            </View>
            <ThemedMaterialIcons name="arrow-drop-down" />
            {renderModal()}
          </Row>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});

// const AppModal: React.FC<{
//   width: number;
//   pageY: number;
//   visible: boolean;
//   onClose: VoidFunction;
// }> = ({width, pageY, visible, onClose}) => {
//   const style = useAnimatedStyle(() => {
//     return {
//       height: withTiming(visible ? 200 : 0, {duration: 200}),
//     };
//   });
//   return (
//     <Modal transparent visible={visible} style={{flex: 1}}>
//       <TouchableOpacity style={{flex: 1}} onPress={onClose}></TouchableOpacity>
//       <ThemedContainer
//         style={{
//           height: 200,
//           position: 'absolute',
//           top: pageY,
//           left: 15,
//           right: 15,
//           backgroundColor: '#eee',
//           zIndex: 100,
//           elevation: 5,
//           width: 180,
//           borderRadius: 5,
//         }}>
//         {visible && (
//           <Animated.View
//             style={[{backgroundColor: 'red', borderRadius: 5}, style]}>
//             <ScrollView>
//               <ListItem title="Sandwich" />
//               <HorizontalDivider />
//               <ListItem title="Cocktail" />
//               <HorizontalDivider />
//               <ListItem title="Sandwich" />
//               <HorizontalDivider />
//               <ListItem title="Cocktail" />
//               <HorizontalDivider />
//               <ListItem title="Sandwich" />
//               <HorizontalDivider />
//               <ListItem title="Cocktail" />
//               <HorizontalDivider />
//               <ListItem title="Sandwich" />
//               <HorizontalDivider />
//               <ListItem title="Cocktail" />
//             </ScrollView>
//           </Animated.View>
//         )}
//       </ThemedContainer>
//       <TouchableOpacity style={{flex: 1}} onPress={onClose}></TouchableOpacity>
//     </Modal>
//   );
// };
