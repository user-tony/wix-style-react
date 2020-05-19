import * as React from 'react';

type ScrollPositionOptions = 'top' | 'middle' | 'bottom' | 'none';

interface ScrollableContainerProps {
  maxHeight: number | string;
  scrollThrottleWait: number;
  onScrollPositionChanged: (
    position: ScrollPositionOptions,
    target: HTMLElement,
  ) => void;
}

export default class ScrollableContainer extends React.Component<
  ScrollableContainerProps
> {}
