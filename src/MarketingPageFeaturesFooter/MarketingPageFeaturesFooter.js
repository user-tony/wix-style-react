import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './MarketingPageFeaturesFooter.st.css';
import { dataHooks } from './constants';

/** A footer for the marketing Page Layout */
class MarketingPageFeaturesFooter extends React.PureComponent {
  render() {
    const { dataHook, className, size, features } = this.props;

    return (
      <div {...styles('root', { size }, className)}>
        <div {...styles('test', { size }, className)} data-hook={dataHook}>
          {features.map((featureItem, idx) => {
            return (
              <FeatureItem
                key={featureItem.id || `feature${idx}`}
                image={featureItem.image}
                title={featureItem.title}
                text={featureItem.text}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const FeatureItem = ({ image, title, text }) => (
  <div className={styles.featureItem}>
    <div className={styles.featureItemImageArea}>{image}</div>
    <div className={styles.featureItemTextArea}>
      <div className={styles.featureItemTextAreaTop}>
        <Text size="small" weight="bold">
          {title}
        </Text>
      </div>
      <div>
        <Text size="small">{text}</Text>
      </div>
    </div>
  </div>
);

MarketingPageFeaturesFooter.displayName = 'MarketingPageFeaturesFooter';

MarketingPageFeaturesFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specify the footer size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Array of features
   *  * `id` - the id of the feature (Each feature must have a unique `id`)
   *  * `image` - the feature image.
   *  * `title` - the feature title.
   *  * `text` - the feature content.
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

MarketingPageFeaturesFooter.defaultProps = {
  size: 'large',
  features: [],
};

export default MarketingPageFeaturesFooter;
