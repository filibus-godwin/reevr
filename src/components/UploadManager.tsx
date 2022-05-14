import React from 'react';
import {FlatList, StyleSheet, View, ViewProps} from 'react-native';
import {useEphemeralStore} from '../store/ephemeralStore';
import {UploadBatch} from './UploadBatch';

type Props = {} & ViewProps;

export const UploadManager: React.FC<Props> = ({style, ...props}) => {
  const uploads = useEphemeralStore(state => state.uploadBatch);
  const remove = useEphemeralStore(state => state.removeFromUploadBatch);
  const incrementRefreshProfileCount = useEphemeralStore(
    state => state.incrementRefreshProfileCount,
  );

  return (
    <>
      <View style={{}} {...props}>
        <FlatList
          inverted
          data={uploads}
          renderItem={({item, index}) => (
            <UploadBatch
              batch={item}
              onPressClose={() => remove(index)}
              onUploadSuccess={() => {
                remove(index);
                incrementRefreshProfileCount();
              }}
            />
          )}
        />
      </View>
    </>
  );
};

