import React from 'react';
import {StyleSheet, Touchable, View, ViewProps} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useTheme} from '../hooks/useTheme';
import {VoidFunction} from '../type';
import {Button} from './Button';
import {CircleAvatar} from './CircleAvatar';
import {Row} from './Containers';
import {ThemedMaterialCommunityIcons} from './Icons';
import {Spacer} from './Spacer';
import {Body, Title} from './Text';

type Props = {
  source: React.ComponentProps<typeof CircleAvatar>['imageProps']['source'];
  name: string;
  onPressFollow?: VoidFunction;
  onPressRemove?: VoidFunction;
} & ViewProps;

export const User: React.FC<Props> = ({
  source,
  name,
  style,
  onPressFollow,
  onPressRemove,
  ...props
}) => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <>
      <Row
        style={[
          {
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: '#aaaaaa55',
            alignSelf: 'flex-start',
            width: ms(140),
            marginRight: 10,
          },
          style,
        ]}
        {...props}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            alignItems: 'center',
            flex: 1,
          }}>
          <ThemedMaterialCommunityIcons
            name="close"
            style={{alignSelf: 'flex-end'}}
            size={17}
          />
          <Spacer height={5} />
          <CircleAvatar {...{imageProps: {source}, size: 80}} />
          <Spacer height={5} />
          <Title numberOfLines={1}>{name}</Title>
          <Body numberOfLines={1}>Artist • Singer</Body>
          <Spacer height={15} />
          <Button text="Follow" mode="outlined" />
        </View>
      </Row>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
