import React from 'react';
import {StyleSheet} from 'react-native';
import {CircleSnail} from 'react-native-progress';
import {useTheme} from '../hooks/useTheme';
import {Column} from './Layout';
import {ElevatedContainer} from './Themed';

export const Loading: React.FC<{}> = () => {
  const {primary} = useTheme();
  return (
    <>
      <Column
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          //   alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingBottom: 30,
        }}>
        <ElevatedContainer
          style={{
            backgroundColor: '#00000066',
            padding: 15,
            borderRadius: 500,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <CircleSnail
            indeterminate
            size={70}
            strokeCap="round"
            color={primary}
          />
        </ElevatedContainer>
      </Column>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
