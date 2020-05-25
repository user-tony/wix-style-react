import styles from './Content.st.css';
import React from 'react';
import Divider from '../../../Divider';
import PropTypes from 'prop-types';
import ScrollableContainer from '../../../common/ScrollableContainer/ScrollableContainer';
import { dataHooks } from '../../constants';
import { BaseModalLayoutContext } from '../../BaseModalLayoutContext';

export class Content extends React.Component {
  state = {
    scrollPosition: 'none',
  };

  getScrollPositionChangedHandler = () => {
    const { contentHideDividers, onContentScrollPositionChanged } = this.props;
    return !contentHideDividers || !!onContentScrollPositionChanged
      ? { onScrollPositionChanged: this.handleScrollPositionChanged }
      : {};
  };

  handleScrollPositionChanged = ({ position, target }) => {
    const { contentHideDividers } = this.props;
    if (!contentHideDividers && this.state.scrollPosition !== position.y) {
      this.setState({ scrollPosition: position.y }, () => {
        this.notifyContentScrollPositionChanged({ position, target });
      });
    } else {
      this.notifyContentScrollPositionChanged({ position, target });
    }
  };

  notifyContentScrollPositionChanged = data =>
    this.props.onContentScrollPositionChanged &&
    this.props.onContentScrollPositionChanged(data);

  isTopDividerHidden = () =>
    this.props.contentHideDividers ||
    this.state.scrollPosition === 'top' ||
    this.state.scrollPosition === 'none';

  isBottomDividerHidden = () =>
    this.props.contentHideDividers ||
    this.state.scrollPosition === 'bottom' ||
    this.state.scrollPosition === 'none';

  render() {
    return (
      <BaseModalLayoutContext.Consumer>
        {({
          content = this.props.content || this.props.children,
          contentMaxHeight = this.props.contentMaxHeight,
          contentHideDividers = this.props.contentHideDividers,
        }) =>
          (content && (
            <div
              data-hook={dataHooks.content}
              data-hidedividers={contentHideDividers}
              {...styles(
                'root',
                {
                  hideTopDivider: this.isTopDividerHidden(),
                  hideBottomDivider: this.isBottomDividerHidden(),
                },
                this.props,
              )}
            >
              {!contentHideDividers && (
                <Divider className={styles.topDivider} />
              )}
              <ScrollableContainer
                dataHook={dataHooks.contentWrapper}
                className={styles.innerContent}
                maxHeight={contentMaxHeight}
                {...this.getScrollPositionChangedHandler()}
              >
                {content}
              </ScrollableContainer>
              {!contentHideDividers && (
                <Divider className={styles.bottomDivider} />
              )}
            </div>
          )) ||
          null
        }
      </BaseModalLayoutContext.Consumer>
    );
  }
}

Content.displayName = 'BaseModalLayout.Content';

Content.propTypes = {
  /** the content you want to render in the modal, children passed directly will be treated as `content` as well */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** the max-height for the modal content, will show a scrollbar if content exceeds */
  contentMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** hides the content scrolling dividers  */
  contentHideDividers: PropTypes.bool,
  /** Handler for changes in the content scroll position  */
  onContentScrollPositionChanged: PropTypes.func,
};

Content.defaultProps = {
  contentHideDividers: false,
};
