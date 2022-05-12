import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from '../components/Appbar';
import {Button} from '../components/Button';
import {Dropdown} from '../components/Dropdown';
import {Row} from '../components/Layout';
import {Section} from '../components/Section';
import {Spacer} from '../components/Spacer';
import {Tabs} from '../components/Tabb';
import {Title} from '../components/Text';
import {
  BaseContainer,
  ThemedMaterialCommunityIcons,
} from '../components/Themed';
import {getTextInputTextColor} from '../constants/schemes';
import {RootStackScreenProps} from '../types';

export const CreateAdScreen: React.FC<RootStackScreenProps<'CreateAd'>> = ({
  navigation,
  route,
}) => {
  const textColor = getTextInputTextColor();
  return (
    <>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Create an Ad" /> */}
        <Appbar.Action name="close" onPress={navigation.goBack} />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title style={{fontSize: 40}}>
            Tell{'\n'}Us{'\n'}About{'\n'}Your{'\n'}AD
          </Title>
          <Section
            title="Describe your offer"
            style={{marginHorizontal: 0, marginTop: 15}}>
            <TextInput
              value="Nulla auctor maximus purus nec lobortis. Donec vel pharetra risus, a vehicula nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi quis elit vel nisl consequat vestibulum. Aliquam pulvinar massa lectus, vitae ultricies ligula sodales aliquet. In quis elit quis lorem vestibulum ullamcorper ut in nisi. Donec vitae augue eget tellus efficitur porttitor sed nec ipsum. Nullam a cursus sem. Etiam sodales arcu eu orci ornare condimentum. Mauris nec auctor leo. Morbi sollicitudin, augue ut fringilla vestibulum, mi nibh gravida nibh, eget malesuada elit nibh sit amet tellus."
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                color: textColor,
              }}
              placeholder="description"
              placeholderTextColor="#999"
              selectionColor={textColor}
              multiline
            />
          </Section>
          <Section
            transparent
            title="What are you looking for?"
            style={{paddingHorizontal: 0, marginTop: 15}}>
            <Dropdown placeholder="category" onSelectItem={() => {}} />
          </Section>
          <Section
            transparent
            title="What else?"
            style={{paddingHorizontal: 0, marginTop: 15}}>
            <Dropdown placeholder="subcategory" onSelectItem={() => {}} />
          </Section>
          <Section
            transparent
            title="Duration"
            style={{paddingHorizontal: 0, marginTop: 15}}>
            <Tabs
              tabs={['24 HRS', '3 DAYS', '7 DAYS', '1 MONTH']}
              onPressTab={() => {}}
              activeIndex={1}
            />
          </Section>
          <Section
            title="What's your budget?"
            style={{marginHorizontal: 0, marginTop: 15}}>
            <Row style={{alignItems: 'center', paddingHorizontal: 15}}>
              <ThemedMaterialCommunityIcons name="cash" size={20} />
              <TextInput
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  color: textColor,
                }}
                placeholder="budget"
                placeholderTextColor="#999"
                selectionColor={textColor}
                keyboardType="numeric"
              />
            </Row>
          </Section>
          <Spacer height={15} />
          <Button text="Submit" mode="outlined" />
          <Spacer height={30} />
        </ScrollView>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
