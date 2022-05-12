import React from 'react';
import {StyleSheet, TextStyle, View, ViewProps} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {Row} from './Layout';
import {Spacer} from './Spacer';
import {Info, Title} from './Text';
import {BaseContainer} from './Themed';

type Props = {title: string; transparent?: boolean} & React.ComponentProps<
  typeof View
>;

export const Section: React.FC<Props> = ({
  title,
  transparent,
  children,
  ...props
}) => {
  return (
    <>
      <View style={styles.base} {...props}>
        <Title style={{}}>{title}</Title>
        <Spacer height={10} />
        <BaseContainer
          style={[
            {
              borderRadius: 5,
            },
            transparent && {backgroundColor: 'transparent'},
          ]}>
          {children}
        </BaseContainer>
      </View>
    </>
  );
};

export const CaptionedSection: React.FC<
  {
    caption: string;
    captionStyle?: TextStyle;
    left?: () => React.ReactNode;
  } & ViewProps
> = ({caption, captionStyle, left, children, ...props}) => {
  const {primary} = useTheme();
  return (
    <>
      <Row style={{alignItems: 'center'}}>
        <Info style={[{marginLeft: 15}, captionStyle]}>{caption}</Info>
        <Spacer flex={1} />
        {left && left()}
      </Row>
      <Spacer height={4} />
      <View {...props}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});
