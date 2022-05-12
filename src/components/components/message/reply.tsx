import React from 'react';
import {ColorValue, StyleSheet, View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from '../../hooks/useTheme';
import {MediaType, VoidFunction} from '../../type';
import {Column, Row} from '../Containers';
import {VerticalDivider} from '../Dividers';
import {ThemedMaterialCommunityIcons} from '../Icons';
import {Spacer} from '../Spacer';
import {Body, Info, Title} from '../Text';
import {ThemedContainer} from '../ThemedContainer';
import {Touchable} from '../Touchable';
import {File} from './file';

export const TextReply: React.FC<{}> = () => {
  return (
    <>
      <Body>
        Nunc vitae blandit orci. Quisque nec sem erat. Praesent porta, lectus et
        pretium ultrices, nisi ligula lacinia nisl, sit amet euismod turpis nisl
        euismod lectus
      </Body>
    </>
  );
};
export const MediaReply: React.FC<{}> = () => {
  return (
    <>
      <Row style={{}}>
        <FastImage
          source={{uri: 'https://source.unsplash.com/random/2?man,face'}}
          style={{height: 70, width: 70, borderRadius: 4}}
        />
        <Spacer width={5} />
        <Body style={{flex: 1}} numberOfLines={5}>
          Nunc vitae blandit orci. Quisque nec sem erat. Praesent porta, lectus
          et pretium ultrices, nisi ligula lacinia nisl, sit amet euismod turpis
          nisl euismod lectus
        </Body>
        {/* <Media /> */}
      </Row>
    </>
  );
};
export const FileReply: React.FC<{}> = () => {
  return (
    <>
      <File style={{}} />
    </>
  );
};

export const Reply: React.FC<
  {
    text?: string;
    media?: MediaType;
    file?: string;
    sender?: string;
    left?: boolean;
    closeable?: boolean;
    onClose?: VoidFunction;
  } & React.ComponentProps<typeof Touchable>
> = ({
  text,
  media,
  file,
  style,
  sender,
  left,
  closeable,
  onClose,
  ...props
}) => {
  const {
    colors: {primary, background},
  } = useTheme();

  return (
    <Touchable
      style={[
        {
          borderRadius: 5,
          borderLeftColor: '#ddd',
          backgroundColor: 'transparent',
          borderTopStartRadius: left ? 5 : 15,
          borderTopEndRadius: left ? 15 : 5,
          overflow: 'hidden',
        },
        style,
      ]}
      {...props}>
      <ThemedContainer style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <Row style={{}}>
          <VerticalDivider style={{width: 5, backgroundColor: '#dddddd77'}} />
          <Column
            style={{
              flex: 1,
              paddingVertical: 8,
              paddingHorizontal: 8,
            }}>
            {file !== undefined && <FileReply />}
            {file === undefined && (
              <Row style={{alignItems: 'center'}}>
                <Column style={{flex: 1, marginRight: 4}}>
                  <Row style={{alignItems: 'center'}}>
                    <Title style={{fontSize: 12}}>{sender}</Title>
                  </Row>
                  {text !== undefined && (
                    <>
                      <Body
                        style={{color: '#fff', flex: 1}}
                        numberOfLines={!closeable ? 5 : 2}>
                        {text}
                      </Body>
                    </>
                  )}
                </Column>
                {media !== undefined && (
                  <FastImage
                    source={{
                      uri: media.uri,
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderRadius: 2.5,
                    }}
                  />
                )}
              </Row>
            )}
          </Column>
        </Row>
        {closeable && (
          <ThemedMaterialCommunityIcons
            size={20}
            name="close"
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              backgroundColor: background,
              borderRadius: 20,
            }}
            onPress={onClose}
          />
        )}
      </ThemedContainer>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  base: {},
});
