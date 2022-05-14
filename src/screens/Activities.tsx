import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Follows} from '../components/activities/follows';
import {Mentions} from '../components/activities/mentions';
import {Reactions} from '../components/activities/reactions';
import {Updates} from '../components/activities/updates';
import {Appbar} from '../components/Appbar';
import {BaseContainer} from '../components/Themed';
import {RootStackScreenProps} from '../types';

export const ActivitiesScreen: React.FC<RootStackScreenProps<'Activities'>> = ({
  navigation,
}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Activities" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ScrollView>
          <Mentions />
          <Reactions />
          <Follows />
          <Updates />
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
