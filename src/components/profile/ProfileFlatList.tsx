import React, {Component, createRef, RefObject} from 'react';
import {FlatListProps, Dimensions, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

type FListProps<T> = {} & FlatListProps<T>;

type FListState = {};

export class ProfileFlatList<T> extends Component<FListProps<T>, FListState> {
  flatlistRef: RefObject<FlatList>;
  dimensions = Dimensions.get('window');
  startOffset: number = 0;
  contentContainerStyle = StyleSheet.flatten(this.props.contentContainerStyle);

  constructor(props: FListProps<T>) {
    super(props);
    this.flatlistRef = createRef<FlatList>();
    console.log(this.contentContainerStyle.paddingTop);
  }

  componentDidMount() {
    this.flatlistRef.current?.scrollToOffset({
      offset: 100,
      animated: true,
    });
  }

  render() {
    const {paddingTop, ...contentContainerStyle} = this.contentContainerStyle;
    return (
      <FlatList
        onMomentumScrollBegin={event => {
          this.startOffset = event.nativeEvent.contentOffset.y;
          this.props.onMomentumScrollBegin &&
            this.props.onMomentumScrollBegin(event);
        }}
        ref={this.flatlistRef}
        onMomentumScrollEnd={event => {
          if (event.nativeEvent.contentOffset.y <= 100) {
            this.flatlistRef.current?.scrollToOffset({
              offset: 100,
              animated: true,
            });
          }
          if (this.startOffset == 0) console.log('yayyy im working');
          this.props.onMomentumScrollEnd &&
            this.props.onMomentumScrollEnd(event);
        }}
        contentContainerStyle={[
          contentContainerStyle,
          {
            paddingTop: 100 + ((paddingTop as number) ?? 0),
          },
        ]}
        {...this.props}
      />
    );
  }
}
