import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './MarketingPageTestimonialsFooter.st.css';
import { dataHooks } from './constants';

/** A footer for the marketing page layout */
class MarketingPageTestimonialsFooter extends React.PureComponent {
  render() {
    const { className, dataHook } = this.props;

    return <div {...styles('root', {}, className)} data-hook={dataHook}></div>;
  }
}

MarketingPageTestimonialsFooter.displayName = 'MarketingPageTestimonialsFooter';

MarketingPageTestimonialsFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specify the footer size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Array of testimonials
   *  * `id` - the id of the testimonial (Each testimonial must have a unique `id`)
   *  * `avatar` - the testimonial avatar image.
   *  * `text` - the testimonial content.
   *  * `authorName` - the testimonial author name.
   */
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.node,
      text: PropTypes.string,
      authorName: PropTypes.string,
    }),
  ),
};

MarketingPageTestimonialsFooter.defaultProps = {
  testimonials: [],
};

export default MarketingPageTestimonialsFooter;
