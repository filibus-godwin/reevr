import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Column, Row} from '../Layout';
import {Spacer} from '../Spacer';
import {ContestEntry} from './ContestEntry';

// TODO Refactor to use contestant ID (userId of the contestant) to fetch user data such as username and avatar

type ContestantType = {
  userId: string;
  avatarUri: string;
  username: string;
  tag?: string;
  entryUri: string;
  votes: number;
};

type PairProps = {
  pair: ContestantType[];
  votedContestandId?: string;
} & React.ComponentProps<typeof View>;

export const Pair: React.FC<PairProps> = ({
  pair,
  votedContestandId,
  ...props
}) => {
  return (
    <>
      <View style={styles.base}>
        <Column
          style={{
            paddingHorizontal: 15,
            marginBottom: 15,
          }}>
          <Spacer height={15} />
          <Row style={{aspectRatio: 1}}>
            {pair.map(
              ({tag, votes, username, userId, avatarUri, entryUri}, index) => {
                return (
                  <ContestEntry
                    key={userId}
                    {...{
                      name: username,
                      entryUri,
                      avatarUri,
                      votes,
                      tag,
                      voted: votedContestandId == userId,
                    }}
                    style={{
                      flex: 1,
                      marginRight: index == 0 ? 2 : 0,
                    }}
                  />
                );
              },
            )}
          </Row>
        </Column>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
