import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Content.st.css';
import { dataHooks } from '../constants';

class Content extends React.PureComponent {
  static displayName = 'Content';

  static propTypes = {
    /** Define styles through a classname */
    className: PropTypes.string,
    /** Any element to be rendered inside under title */
    children: PropTypes.node,
  };

  static defaultProps = {
    noPadding: false,
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        className={st(classes.root, className)}
        data-hook={dataHooks.sidePanelContent}
      >
        {children}
      </div>
    );
  }
}

export default Content;
