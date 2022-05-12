import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {ListItem} from './ListItem';
import {Body, Info} from './Text';
import {useAppDimensions} from '../constants/dim';
import {BaseContainer, ElevatedContainer, ThemedMaterialIcons} from './Themed';
import {Row} from './Layout';
import {FlatList} from 'react-native-gesture-handler';

type Props = {
  placeholder?: string;
  disabled?: boolean;
  data?: string[];
  onSelectItem: (item: string) => void;
} & ViewProps;

export const Dropdown: React.FC<Props> = ({
  placeholder,
  disabled,
  data,
  onSelectItem,
  ...props
}) => {
  const {primary} = useTheme();
  const {roundness} = useAppDimensions();

  const [visible, setVisible] = useState(false);

  const onPress = () => {
    setVisible(true);
  };

  const renderModal = () => {
    return (
      <Modal
        onShow={() => {}}
        onDismiss={() => setVisible(false)}
        transparent
        animationType="fade"
        visible={visible}
        style={{flex: 1}}>
        <Pressable
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          onPress={() => setVisible(!visible)}></Pressable>
        <BaseContainer
          style={{
            // height: 250,
            flex: 2,
          }}>
          <ElevatedContainer
            style={{
              flex: 1,
              marginHorizontal: 15,
              borderRadius: 5,
            }}>
            <FlatList
              data={data}
              keyExtractor={item => `${item}`}
              renderItem={({item}) => (
                <ListItem
                  title={item}
                  onPress={() => {
                    onSelectItem(item);
                    setVisible(false);
                  }}
                />
              )}
            />
          </ElevatedContainer>
        </BaseContainer>
        <Pressable
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          onPress={() => setVisible(!visible)}></Pressable>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={onPress} style={{flex: 1}}>
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
              <Body>{placeholder}</Body>
            </View>
            <ThemedMaterialIcons name="arrow-drop-down" />
          </Row>
        </View>
      </TouchableOpacity>
      {renderModal()}
    </>
  );
};
