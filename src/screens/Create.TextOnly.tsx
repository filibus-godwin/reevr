import {Formik} from 'formik';
import React, { useState} from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';
import {Appbar} from '../components/Appbar';
import {Spacer} from '../components/Spacer';
import {Title} from '../components/Text';
import {BaseContainer, ElevatedContainer} from '../components/Themed';
import {RootStackScreenProps} from '../types';
import {Button} from '../components/Button';
import * as Yup from 'yup';
import {usePostHandler} from '../shared-hooks/usePostHandler';

const validationSchema = Yup.object().shape({
  text: Yup.string().min(2).max(250).required(),
});

export const CreateTextOnlyScreen: React.FC<
  RootStackScreenProps<'CreateTextOnly'>
> = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const {createPost} = usePostHandler();

  const handleOnSubmit = async ({text}: {text: string}) => {
    setLoading(true);
    createPost(
      {
        postedAt: new Date(),
        text,
        media: [],
        numberOfComments: 0,
        numberOfLikes: 0,
        timesBookmarked: 0,
      },
      () => {},
      () => {
        Keyboard.dismiss();
        navigation.goBack();
      },
      () => {},
    );
  };
  return (
    <>
      <Appbar.Header>
        <Appbar.Action name="close" onPress={navigation.goBack} />
        <Spacer flex={1} />
      </Appbar.Header>
      <BaseContainer style={styles.base}>
        <Title style={{fontSize: 40}}>
          What's on {'\n'}Your Mind?{'\n'}
        </Title>
        <Spacer height={20} />
        <Formik
          validationSchema={validationSchema}
          initialValues={{text: ''}}
          onSubmit={handleOnSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <ElevatedContainer style={{borderRadius: 5}}>
                <TextInput
                  value={values.text}
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    color: '#fff',
                  }}
                  placeholder="what's on your mind?"
                  placeholderTextColor="#999"
                  selectionColor={'#fff'}
                  multiline
                  onChangeText={handleChange('text')}
                />
              </ElevatedContainer>
              <Button text="done" onPress={handleSubmit} loading={loading} />
            </>
          )}
        </Formik>
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
