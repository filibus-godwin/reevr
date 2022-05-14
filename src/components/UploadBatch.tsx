import React, {useEffect, useState} from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {Title} from './Text';
import {Bar} from 'react-native-progress';
import {Spacer} from './Spacer';
import {Column, Row} from './Layout';
import {IconButton} from './IconButton';
import {useTheme} from '../hooks/useTheme';
import {MediaAsset, Post, VoidFunction} from '../types';
import {TouchableImage} from './TouchableImage';
import {UploadManager} from '../client/upload.manager';
import {usePostHandler} from '../shared-hooks/usePostHandler';
import Animated, {SlideInLeft} from 'react-native-reanimated';

type Props = {
  onPressClose?: VoidFunction;
  onComplete?: VoidFunction;
  onProgressChanged?: (progress: number) => void;
  onUploadSuccess: VoidFunction;
  onUploadFailed?: VoidFunction;
  visible?: boolean;
  count?: number;
  batch: Post;
} & ViewProps;

export const UploadBatch: React.FC<Props> = ({
  onPressClose,
  onComplete,
  onProgressChanged,
  onUploadSuccess,
  visible,
  style,
  batch,
  ...props
}) => {
  const {primary} = useTheme();
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState<boolean>(false);
  const [retry, setRetry] = useState(false);

  const {createPost} = usePostHandler();
  useEffect(() => {
    console.log(batch);
    createPost(
      batch,
      progress => {
        setProgress(progress);
      },
      () => {
        setProgress(1);
        onUploadSuccess();
        console.log('completed');
      },
      () => {
        setProgress(0);
        setFailed(true);
        console.log('failed');
      },
    );
  }, [retry]);

  return (
    <>
      <Animated.View entering={SlideInLeft} exiting={SlideInLeft.delay(3000)}>
        <Row style={[styles.base, {alignItems: 'center'}, style]} {...props}>
          <TouchableImage
            imageProps={{
              source: {uri: (batch.media as MediaAsset[])[0].uri as string},
              style: {width: 35, height: 35, borderRadius: 5},
            }}
            style={{width: 35, height: 35, borderRadius: 5}}
          />
          <Spacer width={15} />
          <Column style={{flex: 1}}>
            <Title>Creating post</Title>
            <Spacer height={5} />
            <Bar progress={progress} color={primary} height={2} />
          </Column>
          {failed && (
            <IconButton
              name="refresh"
              onPress={() => {
                setRetry(!retry);
              }}
            />
          )}
          <IconButton
            name="close"
            onPress={() => {
              onPressClose && onPressClose();
              UploadManager.stopUploadTransaction();
            }}
          />
        </Row>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#121212',
  },
});
