import React from 'react';
import PropTypes from 'prop-types';

import styles from './BaseModalLayout.st.css';
import { dataHooks } from './constants';
import CloseButton from '../CloseButton';

/** Private component to be used by all public modals. Represents the common internals of all modals */
const BaseModalLayout = ({
  children,
  onCloseButtonClick,
  theme,
  ...restProps
}) => (
  <div {...styles('root', { theme }, restProps)}>
    {children}
    <CloseButton
      dataHook={dataHooks.closeButton}
      className={styles.closeButton}
      onClick={onCloseButtonClick}
      size="large"
      skin="dark"
    />
  </div>
);

BaseModalLayout.propTypes = {
  /** additional css classes */
  className: PropTypes.string,
  /** callback for when the close button is clicked */
  onCloseButtonClick: PropTypes.func,
  /** a global theme for the modal, will be applied as stylable state and will affect footer buttons skin */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),
};

BaseModalLayout.defaultProps = {
  theme: 'standard',
};

BaseModalLayout.displayName = 'BaseModalLayout';
export default BaseModalLayout;
