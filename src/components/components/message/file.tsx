import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Column, Row} from '../Containers';
import {IconButton} from '../IconButton';
import {ThemedMaterialCommunityIcons, ThemedMaterialIcons} from '../Icons';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';
import {ThemedContainer} from '../ThemedContainer';

type Props = {showIcon?: boolean; file?: string} & React.ComponentProps<
  typeof ThemedContainer
>;

export const File: React.FC<Props> = ({style, file, showIcon, ...props}) => {
  const {
    colors: {secondary},
  } = useTheme();

  if (file == undefined) return null;
  return (
    <>
      <ThemedContainer
        style={[styles.base, {backgroundColor: secondary as ColorValue}, style]}
        {...props}>
        <Row style={{alignItems: 'center'}}>
          <ThemedMaterialCommunityIcons name="file-pdf" color={'#fff'} />
          <Spacer width={10} />
          <Column style={{flex: 1}}>
            <Title style={{color: '#fff', fontSize: 18, fontWeight: '300'}}>
              I am a file.pdf
            </Title>
            <Info>20mib</Info>
          </Column>
          {showIcon && <IconButton name="file-download" color={'#fff'} />}
        </Row>
      </ThemedContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
