import Color from 'color';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Row} from '../Containers';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';

type VoteButtonProps = {
  name: string;
  voted?: boolean;
} & React.ComponentProps<typeof TouchableOpacity>;

export const VoteButton: React.FC<VoteButtonProps> = ({
  name,
  voted,
  ...props
}) => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <>
      <TouchableOpacity {...props}>
        <Row style={{alignItems: 'center', alignSelf: 'center'}}>
          <View
            style={{
              borderRadius: 5,
              borderColor: primary,
              borderWidth: 0.5,
              flexDirection: 'row',
              alignSelf: 'flex-start',
              alignItems: 'center',
              overflow: 'hidden',
              paddingRight: 10,
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: voted ? primary : 'transparent',
              }}>
              <Info
                style={{
                  color: voted
                    ? Color(primary).darken(1).rgb().toString()
                    : primary,
                }}>
                {voted ? 'Voted' : 'Vote'}
              </Info>
            </View>
            <Spacer width={5} />
            <Title>{name}</Title>
          </View>
        </Row>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
