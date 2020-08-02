import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './MarketingPageTestimonialsFooter.st.css';
import { dataHooks } from './constants';

/** A footer for the marketing page layout */
class MarketingPageTestimonialsFooter extends React.PureComponent {
  render() {
    const { className, dataHook, testimonials } = this.props;

    return (
      <div {...styles('root', {}, className)} data-hook={dataHook}>
        {testimonials.map((testimonialItem, index) => {
          return (
            <TestimonialItem
              key={testimonialItem.id || `testimonial${index}`}
              index={index}
              avatar={testimonialItem.avatar}
              authorName={testimonialItem.authorName}
              text={testimonialItem.text}
            />
          );
        })}
      </div>
    );
  }
}

const TestimonialItem = ({ index, avatar, text, authorName }) => (
  <div className={styles.testimonialItem} data-hook="testimonial">
    {avatar && (
      <div
        className={styles.testimonialItemAvatar}
        data-hook={`${dataHooks.testimonialAvatar}${index}`}
      >
        {avatar}
      </div>
    )}
    <div className={styles.testimonialItemTextArea}>
      {text && (
        <div className={styles.testimonialItemText}>
          <Text data-hook={`${dataHooks.testimonialText}${index}`} size="small">
            {text}
          </Text>
        </div>
      )}
      {authorName && (
        <Text
          data-hook={`${dataHooks.testimonialAuthorName}${index}`}
          size="small"
          weight="bold"
        >
          {authorName}
        </Text>
      )}
    </div>
  </div>
);

MarketingPageTestimonialsFooter.displayName = 'MarketingPageTestimonialsFooter';

MarketingPageTestimonialsFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

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
