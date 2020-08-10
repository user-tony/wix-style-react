import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './GooglePreview.st.css';

import Text from '../Text';
import Box from '../Box';

/**
 *  A preview of a title, link and description of SEO result as it displayed in Google
 */
class GooglePreview extends React.PureComponent {
  static displayName = 'GooglePreview';

  static propTypes = {
    dataHook: PropTypes.string,

    /** A site title */
    title: PropTypes.string,
    /** A link for the site */
    previewUrl: PropTypes.string,
    /** A short description for the site */
    description: PropTypes.string,
  };

  render() {
    return (
      <Box
        className={classes.root}
        dataHook={this.props.dataHook}
        direction="vertical"
      >
        <Text
          className={classes.googlePreviewTitle}
          dataHook={'googlePreview-title'}
          weight="bold"
          size="medium"
          secondary={false}
          light={false}
          ellipsis
        >
          {this.props.title}
        </Text>
        <Text
          weight="thin"
          size="tiny"
          light={false}
          className={classes.googlePreviewUrl}
          dataHook={'googlePreview-previewUrl'}
          ellipsis
        >
          {this.props.previewUrl}
        </Text>
        <div className={classes.googlePreviewDescriptionContainer}>
          <Text
            className={classes.googlePreviewDescription}
            weight="thin"
            size="tiny"
            light={false}
            dataHook="googlePreview-description"
          >
            {this.props.description}
          </Text>
        </div>
      </Box>
    );
  }
}

export default GooglePreview;
