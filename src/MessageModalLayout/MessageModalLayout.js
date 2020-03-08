import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageModalLayout.st.css';
import BaseModalLayout from '../BaseModalLayout';

const themeMapping = {
  standard: {
    skin: 'standard',
  },
  premium: {
    skin: 'premium',
  },
  alert: {
    skin: 'destructive',
  },
};

/** MessageModalLayout */
class MessageModalLayout extends React.PureComponent {
  _renderIllustration() {
    const { illustration } = this.props;

    return (
      <div className={styles.illustrationContainer}>
        <div className={styles.imageWrapper}>
          {typeof illustration === 'string' ? (
            <img src={illustration} width="100%" />
          ) : (
            illustration
          )}
        </div>
      </div>
    );
  }

  render() {
    const {
      dataHook,
      theme,
      illustration,
      primaryButtonProps,
      secondaryButtonProps,
    } = this.props;

    const width = illustration ? '630px' : '510px';

    const skin = themeMapping[theme].skin;
    primaryButtonProps['skin'] = skin;
    secondaryButtonProps['skin'] = skin;

    return (
      <div
        {...styles('root', { theme }, this.props)}
        data-hook={dataHook}
        style={{ width }}
      >
        {illustration && this._renderIllustration()}
        <BaseModalLayout
          {...this.props}
          secondaryButtonProps={secondaryButtonProps}
          primaryButtonProps={primaryButtonProps}
        ></BaseModalLayout>
      </div>
    );
  }
}

MessageModalLayout.displayName = 'MessageModalLayout';

MessageModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,

  /** Illustration URL or custom element. */
  illustration: PropTypes.node,
  /** Theme will affect the buttons skins and illustration bg color. */
  theme: PropTypes.oneOf(['standard', 'premium', 'alert']),
};

MessageModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  theme: 'standard',
  primaryButtonProps: {},
  secondaryButtonProps: {},
};

export default MessageModalLayout;
