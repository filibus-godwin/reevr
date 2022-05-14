import React, {createRef} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import PagerView, {PagerViewProps} from 'react-native-pager-view';
import {useSharedValue} from 'react-native-reanimated';
import {PagerTab} from './PagerTab';

type Props = {tabs: string[]; pagerTabStyle?: ViewStyle} & PagerViewProps;

export const ViewPager: React.FC<Props> = ({
  tabs,
  pagerTabStyle,
  children,
  onPageScroll,
  style,
  ...props
}) => {
  const offset = useSharedValue(0);
  const position = useSharedValue(0);
  const pager = createRef<PagerView>();
  const pageScroll: PagerViewProps['onPageScroll'] = e => {
    offset.value = e.nativeEvent.offset;
    position.value = e.nativeEvent.position;
    onPageScroll && onPageScroll(e);
  };
  const onPressTab = (index: number) => pager.current?.setPage(index);
  return (
    <>
      <PagerTab
        onPressTab={onPressTab}
        style={[
          {
            marginBottom: 5,
            alignSelf: 'flex-start',
          },
          pagerTabStyle,
        ]}
        {...{position, offset, tabs}}
      />
      <PagerView ref={pager} style={style} onPageScroll={pageScroll} {...props}>
        {children}
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  base: {},
});
