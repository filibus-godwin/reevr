import React, {useContext, useEffect} from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import {Account} from '../components/Account';
import {SearchBar} from '../components/SearchBar';
import {BaseContainer} from '../components/Themed';
import {useUserListStore} from '../store/userlist.store';
import {RootStackScreenProps, Profile} from '../types';

export const UserSearchScreen: React.FC<RootStackScreenProps<'UserSearch'>> = ({
  navigation,
  route,
}) => {
  const users = useUserListStore(state => state.users);
  const addUsers = useUserListStore(state => state.addUsers);

  useEffect(() => {
  }, []);

  const renderItem: FlatListProps<Profile>['renderItem'] = ({item}) => (
    <Account
      onPressAvatar={() =>
        navigation.navigate('UserProfile', {userId: item.id})
      }
      onPress={() => navigation.navigate('Conversation', {userId: item.id})}
      name={item.username}
      source={{uri: item.profilePictureUrl}}
      bio={item.bio}
    />
  );

  return (
    <>
      <SearchBar />
      <BaseContainer style={styles.base}>
        <View key={1} style={{flex: 1}}>
          <FlatList data={users as any} renderItem={renderItem} />
        </View>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {flex: 1},
});
