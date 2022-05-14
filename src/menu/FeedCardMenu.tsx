import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheet} from '../components/BottomSheet';
import {ListItem} from '../components/ListItem';
import {useStore} from '../store/store';
import {RootStackScreenProps} from '../types';

export const PostCardMenuScreen: React.FC<
  RootStackScreenProps<'PostCardMenu'>
> = ({navigation, route}) => {
  const user = useStore(state => state.user);
  const isPersonal = user.id == route.params.authorId;

  const onPressDelete = () => {
  };

  return (
    <>
      <BottomSheet onClose={navigation.goBack}>
        {isPersonal && (
          <>
            <ListItem title="Follow" onPress={() => {}} />
            <ListItem title="Unfollow" onPress={() => {}} />
            <ListItem title="Report" onPress={() => {}} />
          </>
        )}
        {!isPersonal && <ListItem title="Delete" onPress={onPressDelete} />}
        <ListItem title="Share" onPress={() => {}} />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
