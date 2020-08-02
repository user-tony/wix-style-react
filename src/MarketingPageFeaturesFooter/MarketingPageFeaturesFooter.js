import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './MarketingPageFeaturesFooter.st.css';
import { dataHooks } from './constants';

const isString = a => typeof a === 'string';

/** A footer for the marketing Page Layout */
class MarketingPageFeaturesFooter extends React.PureComponent {
  render() {
    const { dataHook, className, features } = this.props;

    return (
      <div {...styles('root', {}, className)} data-hook={dataHook}>
        {features.map((featureItem, index) => {
          return (
            <FeatureItem
              key={featureItem.id || `feature${index}`}
              index={index}
              image={featureItem.image}
              title={featureItem.title}
              text={featureItem.text}
            />
          );
        })}
      </div>
    );
  }
}

const FeatureItem = ({ index, image, title, text }) => (
  <div className={styles.featureItem} data-hook={dataHooks.feature}>
    {image && (
      <div
        className={styles.featureItemImageContainer}
        data-hook={`${dataHooks.featureImage}${index}`}
        children={
          isString(image) ? (
            <img
              className={styles.featureItemImage}
              src={image}
              alt="featureImage"
            />
          ) : (
            image
          )
        }
      />
    )}
    <div className={styles.featureItemTextContainer}>
      {title && (
        <div className={styles.featureItemTitleContainer}>
          <Text
            data-hook={`${dataHooks.featureTitle}${index}`}
            size="small"
            weight="bold"
          >
            {title}
          </Text>
        </div>
      )}
      {text && (
        <Text data-hook={`${dataHooks.featureText}${index}`} size="small">
          {text}
        </Text>
      )}
    </div>
  </div>
);

MarketingPageFeaturesFooter.displayName = 'MarketingPageFeaturesFooter';

MarketingPageFeaturesFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /**
   * Array of features
   *  * `id` - the id of the feature (Each feature must have a unique `id`)
   *  * `image` - the feature image. If given as string, it will be used within `<img/>`. Otherwise can be given as React.Node.
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
  features: [],
};

export default MarketingPageFeaturesFooter;
