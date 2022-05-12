import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from './Button';
import {Row} from './Layout';
import {Spacer} from './Spacer';
import {Body, Info, Title} from './Text';
import {Touchable} from './Touchable';

type Props = {
  date: string;
};

export const Ad: React.FC<Props> = ({date}) => {
  return (
    <>
      <Touchable onPress={() => {}}>
        <View style={styles.base}>
          {/* <Info style={{}}>{date}</Info>
          <Spacer height={5} /> */}
          <Body numberOfLines={3}>
            Curabitur molestie tempus sem vel ultricies. Pellentesque arcu erat,
            hendrerit non nibh ac, laoreet ultricies odio. Sed sit amet diam
            efficitur, congue mauris quis, dictum mi. Maecenas sodales nulla in
            finibus ultricies.
          </Body>
          {/* <Spacer height={5} />
          <Info>USD 200</Info> */}
          <Row>{/* <Button text="delete" mode="outlined" /> */}</Row>
        </View>
      </Touchable>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
