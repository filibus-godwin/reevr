import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from '../Containers';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';

export const ProfileMeta: React.FC<{title: string; data: string | number}> = ({
  title,
  data,
}) => {
  return (
    <Row style={{alignItems: 'center'}}>
      <Title style={{fontSize: 14.8, fontWeight: '800'}}>{data}</Title>
      <Spacer width={5} />
      <Info style={{fontSize: 12.6}}>{title}</Info>
    </Row>
  );
};
