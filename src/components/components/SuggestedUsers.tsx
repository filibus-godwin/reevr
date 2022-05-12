import React from 'react';
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {Button} from './Button';
import {CaptionedSection} from './Section';
import {User} from './User';

type Props = {
  users: {uri: string; name: string}[];
} & ViewProps;

export const SuggestedUsers: React.FC<Props> = ({users, style, ...props}) => {
  const renderItem: FlatListProps<{
    uri: string;
    name: string;
  }>['renderItem'] = ({item}) => (
    <User source={{uri: item.uri}} name={item.name} />
  );
  return (
    <>
      <View style={[{marginBottom: 5}, style]} {...props}>
        <CaptionedSection
          caption="Suggested for you"
          left={() => <Button text="See all" />}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={users}
            renderItem={renderItem}
            contentContainerStyle={{paddingHorizontal: 15}}
          />
        </CaptionedSection>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
