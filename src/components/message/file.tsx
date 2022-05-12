import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {IconButton} from '../IconButton';
import {Column, Row} from '../Layout';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';
import {BaseContainer, ThemedMaterialCommunityIcons} from '../Themed';

type Props = {showIcon?: boolean; file?: string} & React.ComponentProps<
  typeof BaseContainer
>;

export const File: React.FC<Props> = ({style, file, showIcon, ...props}) => {
  const {secondary} = useTheme();

  if (file == undefined) return null;
  return (
    <>
      <BaseContainer
        style={[styles.base, {backgroundColor: secondary as ColorValue}, style]}
        {...props}>
        <Row style={{alignItems: 'center'}}>
          <ThemedMaterialCommunityIcons name="file-pdf-box" color={'#fff'} />
          <Spacer width={10} />
          <Column style={{flex: 1}}>
            <Title style={{color: '#fff', fontSize: 18, fontWeight: '300'}}>
              I am a file.pdf
            </Title>
            <Info>20mib</Info>
          </Column>
          {showIcon && <IconButton name="file-download" color={'#fff'} />}
        </Row>
      </BaseContainer>
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
