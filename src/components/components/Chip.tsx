import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {Row} from './Containers';
import {ThemedMaterialCommunityIcons, ThemedMaterialIcons} from './Icons';
import {Spacer} from './Spacer';
import {Info} from './Text';

type Props = {data: string; selected?: boolean} & ViewProps;

export const Chip: React.FC<Props> = ({data, selected}) => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <>
      <Row
        style={[
          styles.base,
          {
            borderRadius: 5,
            borderWidth: 0.8,
            borderColor: primary,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignSelf: 'flex-start',
            marginRight: 10,
            marginTop: 10,
            alignItems: 'center',
          },
        ]}>
        {selected && (
          <>
            <ThemedMaterialIcons name="done" size={16} />
            <Spacer width={2} />
          </>
        )}
        <Info>{data}</Info>
      </Row>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
