import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from '../components/Appbar';
import {Button} from '../components/Button';
import {ListItem} from '../components/ListItem';
import {Section} from '../components/Section';
import {BaseContainer} from '../components/Themed';
import {ToggleButton} from '../components/ToggleButton';
import {useAuth} from '../shared-hooks/useAuth';
import {useStore} from '../store/store';
import {RootStackScreenProps} from '../types';

export const SettingsScreen: React.FC<RootStackScreenProps<'Settings'>> = ({
  navigation,
  route,
}) => {
  const setMode = useStore(state => state.setMode);
  const mode = useStore(state => state.mode);
  const toggle = useStore(state => state.toggleLoggedIn);
  const {logout} = useAuth();
  const onPress = () => {};
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ScrollView>
          <Section title="Account" transparent>
            <ListItem title="Manage account" onPress={onPress} />
            <ListItem title="Privacy" onPress={onPress} />
          </Section>
          <Section title="Themes" transparent>
            <ListItem
              title="Light"
              left={() => <ToggleButton toggled={mode == 'light'} />}
              onPress={() => {
                setMode('light');
              }}
            />
            <ListItem
              title="Dark"
              left={() => <ToggleButton toggled={mode == 'dark'} />}
              onPress={() => {
                setMode('dark');
              }}
            />
            <ListItem
              title="System default"
              left={() => <ToggleButton toggled={mode == 'system'} />}
              onPress={() => {
                setMode('system');
              }}
            />
          </Section>
          <Section title="Support" transparent>
            <ListItem title="Report a Problem" onPress={onPress} />
          </Section>
          <Section title="Legal stuff" transparent>
            <ListItem title="Terms and Conditions" onPress={onPress} />
            <ListItem title="Copyright policy" onPress={onPress} />
            <ListItem title="About Us" onPress={onPress} />
            <ListItem title="Privacy Policy" onPress={onPress} />
          </Section>
          <Button
            onPress={() => {
              // toggle();
              // logout();
            }}
            text="LOGOUT"
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
