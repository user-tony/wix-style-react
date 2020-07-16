import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bounce.st.css';

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

  componentDidMount() {
    const { triggerAnimation } = this.props;

    if (triggerAnimation) {
      this._startStopAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    const { triggerAnimation } = this.props;

    if (prevProps.triggerAnimation !== triggerAnimation) {
      this._startStopAnimation();
    }
  }

  _onAnimationStart = () => {
    const { onEnter } = this.props;
    this.setState(
      {
        animationFinished: false,
      },
      () => onEnter && onEnter(),
    );
  };

  _onAnimationEnd = () => {
    const { onExited } = this.props;
    this.setState(
      {
        animationFinished: true,
        classNames: '',
      },
      () => onExited && onExited(),
    );
  };

  _startStopAnimation = () => {
    const { classNames } = this.state;

    this.setState({ classNames: classNames ? '' : styles.animation });
  };

  render() {
    const { classNames } = this.state;
    const { children, dataHook } = this.props;

    return (
      <div
        data-hook={dataHook}
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
