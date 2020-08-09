import React from 'react';
import PropTypes from 'prop-types';

import styles from './MarketingPageLayoutContent.st.css';
import { dataHooks } from './constants';

import Text from '../Text';
import Heading from '../Heading';
import { isString } from '../../utils/StringUtils';

/** This component is used in the MarketingPageLayout component. It includes all the content of the page. */
class MarketingPageLayoutContent extends React.PureComponent {
  state = {};

  render() {
    const {
      dataHook,
      className,
      overline,
      title,
      subtitle,
      content,
      actions,
    } = this.props;

    return (
      <div {...styles('root', {}, className)} data-hook={dataHook}>
        {overline && (
          <div
            className={styles.overline}
            children={
              isString(overline) ? (
                <Text size="small">{overline}</Text>
              ) : (
                overline
              )
            }
          ></div>
        )}
        {title && (
          <div
            className={styles.title}
            children={
              isString(title) ? (
                <Heading appearance="H2">{title}</Heading>
              ) : (
                title
              )
            }
          ></div>
        )}
        {subtitle && (
          <div
            className={styles.header}
            children={
              isString(subtitle) ? (
                <Text size="medium">{subtitle}</Text>
              ) : (
                subtitle
              )
            }
          ></div>
        )}
      </div>
    );
  }
}

MarketingPageLayoutContent.displayName = 'MarketingPageLayoutContent';

MarketingPageLayoutContent.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** The overline content. */
  overline: PropTypes.node,

  /** The page's title. */
  title: PropTypes.node,

  /** The page's subtitle. */
  subtitle: PropTypes.node,

  /** The page's content. */
  content: PropTypes.node,

  /** The page's actions - area of buttons. */
  actions: PropTypes.node,
};

MarketingPageLayoutContent.defaultProps = {
  size: 'large',
};

export default MarketingPageLayoutContent;
