import React from 'react';
import {
  Dimensions,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {Button} from './Button';
import {Entry} from './Entry';
import {CaptionedSection} from './Section';
import {User} from './User';

type Props = {
  users: {uri: string; name: string}[];
  aspectRatio: number;
} & ViewProps;

export const SuggestedVoting: React.FC<Props> = ({
  users,
  style,
  aspectRatio,
  ...props
}) => {
  const {width} = Dimensions.get('screen');
  const renderItem: FlatListProps<{
    uri: string;
    name: string;
  }>['renderItem'] = ({item}) => <Entry.Small style={{marginRight: 10}} />;
  return (
    <>
      <CaptionedSection
        style={[{marginBottom: 5, aspectRatio}, style]}
        caption="Ongoing Contest - Battle Royale O1"
        left={() => <Button text="See all" />}
        {...props}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={users}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          style={{}}
        />
      </CaptionedSection>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
