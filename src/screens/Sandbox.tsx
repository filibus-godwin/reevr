import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../components/Button';

export const Sandbox: React.FC<{}> = () => {
  return (
    <>
      <SafeAreaView style={{padding: 20}}>
        <Button
          text={'Login'}
          onPress={() => {
            
          }}
        />
        <Button
          text={'Add Profile'}
          onPress={() => {
            
          }}
        />
        <Button
          text={'Load posts'}
          onPress={() => {
            
          }}
        />

        <Button
          text={'Log profile'}
          onPress={() => {
          }}
        />
      </SafeAreaView>
    </>
  );
};
