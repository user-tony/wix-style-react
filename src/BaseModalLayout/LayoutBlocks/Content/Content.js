import styles from './Content.st.css';
import React, { useState, useCallback } from 'react';
import Divider from '../../../Divider';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ScrollableContainer, {
  AreaY,
} from '../../../common/ScrollableContainer';
import { ScrollableContainerCommonProps } from '../../../common/PropTypes/ScrollableContainerCommon';
import { dataHooks } from '../../constants';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Content = ({
  dataHook,
  className,
  children,
  contentHideDividers,
  onContentScrollAreaChanged,
}) => {
  const { contentClassName, content = children } = useBaseModalLayoutContext();
  const [scrollAreaY, setScrollAreaY] = useState(AreaY.NONE);

  const handleScrollAreaChanged = useCallback(
    ({ area, target }) => {
      if (scrollAreaY !== area.y) {
        if (!contentHideDividers) {
          setScrollAreaY(area.y);
        }
        if (onContentScrollAreaChanged) {
          onContentScrollAreaChanged({ area, target });
        }
      }
    },
    [contentHideDividers, onContentScrollAreaChanged, scrollAreaY],
  );

  const isTopDividerHidden = useCallback(
    () =>
      contentHideDividers ||
      scrollAreaY === AreaY.TOP ||
      scrollAreaY === AreaY.NONE,
    [contentHideDividers, scrollAreaY],
  );

  const isBottomDividerHidden = useCallback(
    () =>
      contentHideDividers ||
      scrollAreaY === AreaY.BOTTOM ||
      scrollAreaY === AreaY.NONE,
    [contentHideDividers, scrollAreaY],
  );

  className = classNames(contentClassName, className);
  const registerToScrollAreaChanges =
    !contentHideDividers || !!onContentScrollAreaChanged;

  return (
    (content && (
      <div
        data-hook={dataHook}
        data-hidedividers={contentHideDividers}
        {...styles(
          'root',
          {
            hideTopDivider: isTopDividerHidden(),
            hideBottomDivider: isBottomDividerHidden(),
          },
          { className },
        )}
      >
        {!contentHideDividers && <Divider className={styles.topDivider} />}
        <ScrollableContainer
          dataHook={dataHooks.contentWrapper}
          className={styles.innerContent}
          onScrollAreaChanged={
            (registerToScrollAreaChanges && handleScrollAreaChanged) || null
          }
        >
          {content}
        </ScrollableContainer>
        {!contentHideDividers && <Divider className={styles.bottomDivider} />}
      </div>
    )) ||
    null
  );
};

Content.displayName = 'BaseModalLayout.Content';

Content.propTypes = {
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** the content you want to render in the modal, children passed directly will be treated as `content` as well */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** hides the content scrolling dividers  */
  contentHideDividers: PropTypes.bool,
  /**
   * A Handler for scroll area changes, will be triggered only when the user scrolls to a
   * different area of the scrollable content, see signature for possible areas
   * ##### Signature:
   * `function({area: {y: AreaY, x: AreaX}, target: HTMLElement}) => void`
   * `AreaY`: top | middle | bottom | none
   * `AreaX`: start | middle | end | none (not implemented yet)
   */
  onContentScrollAreaChanged:
    ScrollableContainerCommonProps['onScrollAreaChanged'],
};

Content.defaultProps = {
  contentHideDividers: false,
};
