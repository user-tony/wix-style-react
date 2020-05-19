import React, { createRef } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

export default class ScrollableContainer extends React.Component {
  static propTypes = {
    /* The container max height */
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /* The wait time value the scroll event will be throttled by */
    scrollThrottleWait: PropTypes.number,
    /* Handler for scroll position changed */
    onScrollPositionChanged: PropTypes.func,
  };

  static defaultProps = {
    scrollThrottleWait: 20,
  };

  handlerScroll = throttle(
    ({ target }) => {
      const { scrollHeight, clientHeight, scrollTop } = target;
      const { onScrollPositionChanged } = this.props;
      let newScrollPosition = 'middle';
      if (scrollHeight <= clientHeight) {
        newScrollPosition = 'none';
      } else if (scrollTop === 0) {
        newScrollPosition = 'top';
      } else if (scrollHeight - scrollTop === clientHeight) {
        newScrollPosition = 'bottom';
      }
      onScrollPositionChanged(newScrollPosition, target);
    },
    this.props.scrollThrottleWait,
    { trailing: true },
  );

  containerRef = createRef();

  componentDidMount() {
    if (this.props.onScrollPositionChanged) {
      this.containerRef.current.addEventListener('scroll', this.handlerScroll);
      this.handlerScroll({ target: this.containerRef.current });
    }
  }

  componentWillUnmount() {
    if (this.props.onScrollPositionChanged) {
      this.containerRef.current.removeEventListener(
        'scroll',
        this.handlerScroll,
      );
    }
  }

  formatSizeValue = value => (isFinite(value) ? `${value}px` : `${value}`);

  getMaxHeight() {
    const { maxHeight } = this.props;
    if (typeof maxHeight !== 'undefined')
      return this.formatSizeValue(maxHeight);
  }

  render() {
    const { children, dataHook, className } = this.props;
    const maxHeight = this.getMaxHeight();
    const style = {
      overflowY: 'auto',
      ...(maxHeight ? { maxHeight } : {}),
    };

    return (
      <div
        data-hook={dataHook}
        className={className}
        style={style}
        ref={this.containerRef}
      >
        {children}
      </div>
    );
  }
}
