import React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Column} from '../Containers';
import {VerticalDivider} from '../Dividers';
import {Spacer} from '../Spacer';
import {Info, Title} from '../Text';
import {File} from './file';
import {Media} from './media';
import {Reply} from './reply';
import {Text} from './text';

type Props = React.ComponentProps<typeof View> & {
  source: ImageSourcePropType;
  name: string;
  timestamp: string;
  replying?: string;
  left?: boolean;
  text?: string;
  media?: string;
  file?: string[];
  replyFile?: string;
  replyMedia?: string;
  replyText?: string;
};

export const Message: React.FC<Props> = ({
  source,
  name,
  style,
  text,
  left,
  file,
  media,
  timestamp,
  replying,
  replyFile,
  replyMedia,
  replyText,
  ...props
}) => {
  const {
    colors: {primary},
  } = useTheme();
  // '#4682b4';
  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: left ? 'row' : 'row-reverse',
        }}
        {...props}>
        <VerticalDivider style={{backgroundColor: left ? '#eee' : primary}} />
        <Spacer width={10} />
        <Column
          style={{
            alignItems: left ? 'flex-start' : 'flex-end',
            flex: 1,
            maxWidth: 300,
          }}>
          <Title>
            {name}
            <Info style={{fontSize: 12, fontWeight: '300'}}>
              {' '}
              • {timestamp}
              {!left && <Info style={{color: primary}}> delivered</Info>}
            </Info>
          </Title>
          <Column style={{flex: 1, paddingHorizontal: 5}}>
            {replying !== undefined && (
              <>
                <Spacer height={1} />
                <Reply
                  sender={name}
                  media={replyMedia}
                  file={replyFile}
                  text={replyText}
                />
              </>
            )}
            <View style={{paddingHorizontal: replying !== undefined ? 5 : 0}}>
              {file && (
                <>
                  <Spacer height={1} />
                  <File showIcon />
                </>
              )}
              {media !== undefined && (
                <>
                  <Spacer height={1} />
                  <Media />
                </>
              )}
              {text && (
                <>
                  <Spacer height={1} />
                  <Text text={text} />
                </>
              )}
            </View>
            <Spacer height={10} />
          </Column>
        </Column>
      </View>
    </>
  );
};

{
  /* <FastImage
  source={{uri: 'https://source.unsplash.com/random/0'}}
  style={{
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }}
/>; */
}
