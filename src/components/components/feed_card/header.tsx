import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {dark, light} from '../../constants/Themes';
import {VoidFunction} from '../../type';
import {CircleAvatar} from '../CircleAvatar';
import {IconButton} from '../IconButton';
import {MaterialIcons, ThemedMaterialIcons} from '../Icons';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';

export const TileHeader: React.FC<{
  name: string;
  avatarUri: string;
  timestamp: string | number;
  style?: ViewStyle;
  sponsored?: boolean;
  onPressName: VoidFunction;
  onPressMenu: VoidFunction;
}> = ({
  style,
  name,
  avatarUri,
  timestamp,
  onPressMenu,
  onPressName,
  sponsored,
}) => {
  return (
    <>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            // marginVertical: 5,
            alignSelf: 'flex-start',
          },
          style,
        ]}>
        <Pressable
          onPress={onPressName}
          style={[
            {
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              alignSelf: 'flex-start',
            },
          ]}>
          <CircleAvatar
            imageProps={{source: {uri: avatarUri}}}
            size={36}
            style={{}}
          />
          <Spacer width={5} />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title
                style={
                  {
                    // color: "#eee",
                    // fontSize: 16,
                    // fontWeight: "700",
                  }
                }>
                {name}
                {sponsored && (
                  <Info
                    style={{fontSize: 12, fontWeight: '300', color: '#ef9d10'}}>
                    {' • '}
                    SPONSORED
                  </Info>
                )}
                <Info style={{fontSize: 11.5}}> • 15 hrs ago</Info>
              </Title>
            </View>
          </View>
        </Pressable>
        <ThemedMaterialIcons
          style={{width: 14}}
          name="more-vert"
          size={24}
          onPress={onPressMenu}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
