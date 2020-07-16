import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bounce.st.css';
import { CSSTransition } from 'react-transition-group';

import { dataHooks, timeout } from './constants';
import { children } from '../Composite';

function FirstChild({ children }) {
  const childrenArray = React.Children.toArray(children);
  return childrenArray[0] || null;
}

/** Bounce animation component */
class Bounce extends React.PureComponent {
  state = {
    classNames: '',
    animationFinished: false,
  };

  componentDidUpdate(prevProps) {
    const { triggerAnimation } = this.props;

    if (prevProps.triggerAnimation !== triggerAnimation) {
      this._startStopAnimation();
    }
  }

  _onAnimationStart = () => {
    this.setState({
      animationFinished: false,
    });
  };

  _onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      classNames: '',
    });
  };

  _startStopAnimation = () => {
    const { classNames } = this.state;

    this.setState({ classNames: classNames ? '' : styles.animation });
  };

  render() {
    const { classNames } = this.state;
    const { children } = this.props;

    return (
      <div
        className={classNames}
        onAnimationStart={this._onAnimationStart}
        onAnimationEnd={this._onAnimationEnd}
      >
        <FirstChild children={children} />
      </div>
    );
  }
}

Bounce.displayName = 'Bounce';

Bounce.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** The component which we would like to animate. When given multiple components- only the first child node will be animated. */
  children: PropTypes.node,

  /** Triggers the enter or exit states of the component. */
  triggerAnimation: PropTypes.bool,

  /** A callback fired immediately after the 'enter' or 'appear' class is applied.*/
  onEnter: PropTypes.func,

  /** A callback fired immediately after the 'exit' class is applied.*/
  onExited: PropTypes.func,
};

Bounce.defaultProps = {
  children: <div />,
};

export default Bounce;
