import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Appbar} from '../components/Appbar';
import {Pair} from '../components/contest/Pair';
import {Column} from '../components/Layout';
import {Spacer} from '../components/Spacer';
import {Body, Info, Title} from '../components/Text';
import {BaseContainer} from '../components/Themed';
import {RootStackScreenProps} from '../types';

export const OngoingContestScreen: React.FC<
  RootStackScreenProps<'OngoingContest'>
> = ({navigation, route}) => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Appbar.Header>
        <Appbar.Action name="close" onPress={navigation.goBack} />
        <Appbar.Content title="Battle Royale 01 - Knockout Stage" />
      </Appbar.Header>
      <BaseContainer style={[styles.base]}>
        <ScrollView>
          <Column style={{paddingHorizontal: 15}}>
            {/* <Spacer height={20} /> */}
            {/* <Title style={{fontSize: 30, fontWeight: '300'}}>Welcome to</Title>
            <Title style={{fontSize: 50, marginTop: 0, lineHeight: 50}}>
              Battle Royale 01
            </Title> */}
            {/* <Body>The Bloody Bloody Mary Edition</Body> */}
            {/* <Spacer height={10} /> */}
            {/* <Body style={{fontSize: 20, fontWeight: '300'}}>
              Watch as 100 Contestants battle for
            </Body>
            <Body style={{fontSize: 30, fontWeight: '300', lineHeight: 30}}>
              USD 500
            </Body> */}

            {/* <Spacer height={10} /> */}
            {/* <Body>
              All entries depict the artists portrayal of the specified.
            </Body> */}
            {/* <Spacer height={20} /> */}
            {/* <Info>Voting ends in 23HRS</Info>
            <Info>Voting ends in 23HRS</Info> */}
          </Column>
          <Pair
            pair={[
              {
                userId: 'Lizzy Chen',
                avatarUri: 'https://source.unsplash.com/random/20',
                entryUri: 'https://wallpaperaccess.com/full/3033241.jpg',
                username: 'Lizzy Chen',
                votes: 23,
                tag: 'redredmary',
              },
              {
                userId: 'Shu Ling',
                avatarUri: 'https://source.unsplash.com/random/21',
                entryUri:
                  'https://i.pinimg.com/736x/6f/1e/4f/6f1e4f279b683d4e744a5aeb0666674a.jpg',
                username: 'Shu Ling',
                votes: 33,
                tag: 'bloodymary',
              },
            ]}
            votedContestandId="Shu Ling"
          />
          <Pair
            pair={[
              {
                userId: 'Mr. Sam',
                avatarUri: 'https://source.unsplash.com/random/30',
                entryUri:
                  'https://i.pinimg.com/originals/c2/56/f5/c256f56370228072b57c1b16cb7c8fe0.jpg',
                username: 'Mr. Sam',
                votes: 233,
                tag: 'remary',
              },
              {
                userId: 'Sly Tuna',
                avatarUri: 'https://source.unsplash.com/random/24',
                entryUri:
                  'https://1.bp.blogspot.com/-pbBoBhfIJSY/X8tB0FWW_GI/AAAAAAAAFzo/2ZBkCLYGOVk85JG-fUhoqzh4yTMx6jKoQCPcBGAsYHg/w919/kyojuro-rengoku-katana-sword-flame-pillar-demon-slayer-uhdpaper.com-4K-8.2046-wp.thumbnail.jpg',
                username: 'Sly Tuna Salmon',
                votes: 133,
                tag: 'weemary',
              },
            ]}
            votedContestandId="Mr. Sam"
          />
        </ScrollView>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
