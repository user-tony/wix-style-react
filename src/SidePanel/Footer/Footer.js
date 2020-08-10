import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Footer.st.css';
import { dataHooks } from '../constants';
import Divider from '../../Divider';

class Footer extends React.PureComponent {
  static displayName = 'Footer';

  static propTypes = {
    /** Define styles through a classname */
    className: PropTypes.string,
    /** Any element to be rendered inside under title */
    children: PropTypes.node,
    /** Show divider */
    showDivider: PropTypes.bool,
  };

  static defaultProps = {
    showDivider: true,
  };

  render() {
    const { children, className, showDivider } = this.props;
    return (
      <div
        className={st(classes.root, className)}
        data-hook={dataHooks.sidePanelFooter}
      >
        {showDivider && <Divider dataHook={dataHooks.sidePanelHeaderDivider} />}
        <div className={classes.footerContainer}>{children}</div>
      </div>
    );
  }
}

export default Footer;
