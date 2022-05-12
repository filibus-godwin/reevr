import React from 'react';
import {View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';
import {useTheme} from '../hooks/useTheme';
import {Column, Row} from './Containers';
import {Spacer} from './Spacer';
import {Info, Title} from './Text';
import {ContestEntry} from './contest/ContestEntry';

type Props = {} & ViewProps;

export const Small: React.FC<Props> = ({style, ...props}) => {
  return (
    <>
      <View
        style={[
          {
            width: ms(280),
          },
          style,
        ]}
        {...props}>
        <Spacer height={2} />
        <Column style={{flex: 1}}>
          <Row style={{flex: 1}}>
            <FastImage
              source={{uri: 'https://source.unsplash.com/random/1?painting'}}
              style={{
                flex: 1,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            />
            <Spacer width={2} />
            {/* <View style={{justifyContent: 'center'}}>
            <Info> Vs </Info>
        </View> */}
            <FastImage
              source={{uri: 'https://source.unsplash.com/random/2?painting'}}
              style={{
                flex: 1,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
            />
          </Row>
        </Column>
        <Spacer height={2} />
        <Column style={{flex: 1}}>
          <Row style={{flex: 1}}>
            <FastImage
              source={{uri: 'https://source.unsplash.com/random/3?painting'}}
              style={{
                flex: 1,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            />
            <Spacer width={2} />
            {/* <View style={{justifyContent: 'center'}}>
            <Info> Vs </Info>
        </View> */}
            <FastImage
              source={{uri: 'https://source.unsplash.com/random/5?painting'}}
              style={{
                flex: 1,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
            />
          </Row>
        </Column>
        <Title style={{fontSize: 13.2}}>Norman Vs Rockwell</Title>
        <Info>Round 01</Info>
        <Spacer flex={1} />
      </View>
    </>
  );
};

const Large: React.FC<{}> = ({}) => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <Column
      style={{
        paddingHorizontal: 15,
        marginBottom: 15,
      }}>
      <Spacer height={15} />
      <Row style={{aspectRatio: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <ContestEntry
            {...{
              name: 'Lizzy Chen',
              entryUri: 'https://wallpaperaccess.com/full/3033241.jpg',
              avatarUri: 'https://source.unsplash.com/random/20',
              votes: 23,
              tag: 'ellises',
            }}
            style={{
              flex: 1,
            }}
          />
        </View>
        <Spacer width={2} />
        <View
          style={{
            flex: 1,
          }}>
          <ContestEntry
            {...{
              name: 'Edward Sharpe',
              entryUri:
                'https://i.pinimg.com/736x/6f/1e/4f/6f1e4f279b683d4e744a5aeb0666674a.jpg',
              avatarUri: 'https://source.unsplash.com/random/21',
              votes: 33,
              voted: true,
              tag: 'ullises',
            }}
            style={{
              flex: 1,
            }}
          />
        </View>
      </Row>
    </Column>
  );
};

export const Entry = {
  Small,
  Large,
};
