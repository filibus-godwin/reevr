import React from 'react';
import {ViewProps} from 'react-native';
import {Row} from '../Layout';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';

export const ProfileMeta: React.FC<
  {title?: string; data?: string | number} & ViewProps
> = ({title, data, style, ...props}) => {
  return (
    <Row style={[{alignItems: 'center'}, style]} {...props}>
      <Title style={{fontSize: 14.8, fontWeight: '800'}}>{data}</Title>
      <Spacer width={5} />
      <Info style={{fontSize: 12.6}}>{title}</Info>
    </Row>
  );
};
