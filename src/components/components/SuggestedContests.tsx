import React from 'react';
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {VoidFunction} from '../type';
import {Button} from './Button';
import {Row} from './Containers';
import {Listing} from './Listing';
import {CaptionedSection} from './Section';

type Props = {
  listings: {
    title: string;
    description: string;
    amount?: string;
    type: 'Ad' | 'Contest';
    onPressMoreInfo?: VoidFunction;
  }[];
  onPressSeeAll?: VoidFunction;
} & ViewProps;

export const SuggestedContests: React.FC<Props> = ({
  style,
  onPressSeeAll,
  listings,
  ...props
}) => {
  const renderItem: FlatListProps<{
    title: string;
    description: string;
    amount?: string;
    type: 'Ad' | 'Contest';
    onPressMoreInfo?: VoidFunction;
  }>['renderItem'] = ({item}) => <Listing {...item} />;
  return (
    <>
      <View style={[{marginBottom: 5}, style]} {...props}>
        <CaptionedSection
          caption="Suggested for you"
          left={() => <Button text="See all" onPress={onPressSeeAll} />}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listings}
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
