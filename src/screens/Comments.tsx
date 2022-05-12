import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from '../components/Appbar';
import {Comment} from '../components/Comment';
import {IconButton} from '../components/IconButton';
import {BaseContainer, ElevatedContainer} from '../components/Themed';
import {getTextInputTextColor} from '../constants/schemes';
import {useColorScheme} from '../hooks/useColorScheme';
import {RootStackScreenProps} from '../types';

export const CommentsScreen: React.FC<RootStackScreenProps<'Comments'>> = ({
  navigation,
  route,
}) => {
  const textColor = getTextInputTextColor();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Comment" />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <ScrollView>
          <Comment
            {...{
              name: 'James Freuden',
              source: {uri: 'https://source.unsplash.com/random/1'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus.
            Vestibulum libero mi, blandit quis tortor sagittis, ornare rhoncus
            sem. Praesent lobortis et mauris a rutrum. Morbi placerat lectus sit
            amet tortor molestie lacinia. Nunc vitae blandit orci. Quisque nec
            sem erat. Praesent porta, lectus et pretium ultrices, nisi ligula
            lacinia nisl, sit amet euismod turpis nisl euismod lectus."
          />
          <Comment
            {...{
              name: 'Blake Belemy',
              source: {uri: 'https://source.unsplash.com/random/2'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus.
            Vestibulum libero mi, blandit quis tortor sagittis, ornare rhoncus
            sem. Praesent lobortis et mauris a rutrum. Morbi placerat lectus sit"
          />
          <Comment
            {...{
              name: 'Eren Yeager',
              source: {uri: 'https://source.unsplash.com/random/3'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus."
          />
          <Comment
            {...{
              name: 'Thomas Brown',
              source: {uri: 'https://source.unsplash.com/random/4'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus.
            Vestibulum libero mi, blandit quis tortor sagittis, ornare rhoncus
            sem. Praesent lobortis et mauris a rutrum. Morbi placerat lectus sit
            amet tortor molestie lacinia."
          />
          <Comment
            {...{
              name: 'Elizabeth Thompson',
              source: {uri: 'https://source.unsplash.com/random/5'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus.
            Vestibulum libero mi, blandit quis tortor sagittis, ornare rhoncus
            sem. Praesent lobortis et mauris a rutrum. Morbi placerat lectus sit
            amet tortor molestie lacinia. Nunc vitae blandit orci. Quisque nec
            sem erat. Praesent porta, lectus et pretium ultrices, nisi ligula
            lacinia nisl, sit amet euismod turpis nisl euismod lectus. Morbi placerat lectus sit
            amet tortor molestie lacinia. Nunc vitae blandit orci. Quisque nec
            sem erat. Praesent porta, lectus et pretium ultrices, nisi ligula
            lacinia nisl, sit amet euismod turpis nisl euismod lectus. Morbi placerat lectus sit
            amet tortor molestie lacinia. Nunc vitae blandit orci. Quisque nec
            sem erat. Praesent porta, lectus et pretium ultrices, nisi ligula
            lacinia nisl, sit amet euismod turpis nisl euismod lectus."
          />
          <Comment
            {...{
              name: 'Olsen Wells',
              source: {uri: 'https://source.unsplash.com/random/6'},
            }}
            text="Vivamus sed turpis id ex ullamcorper."
          />
          <Comment
            {...{
              name: 'Orville D',
              source: {uri: 'https://source.unsplash.com/random/7'},
            }}
            text="Vivamus sed turpis id ex ullamcorper ullamcorper quis ac lectus.
            Vestibulum libero mi, blandit quis tortor sagittis, ornare rhoncus
            sem. Praesent lobortis et mauris a rutrum. Morbi placerat lectus sit
            amet tortor molestie lacinia. Nunc vitae blandit orci. Quisque nec
            sem erat. Praesent porta, lectus et pretium ultrices, nisi ligula
            lacinia nisl, sit amet euismod turpis nisl euismod lectus."
          />
        </ScrollView>
        <ElevatedContainer style={{flexDirection: 'row', paddingHorizontal: 0}}>
          <IconButton name="emoji-emotions" />
          <TextInput
            style={{color: textColor, flex: 1}}
            selectionColor={textColor}
            placeholder="leave a comment"
            placeholderTextColor={'#999'}
            multiline
          />
          <IconButton name="send" />
        </ElevatedContainer>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
