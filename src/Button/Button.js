import React, { PureComponent } from 'react';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import { generateDataAttr } from '../utils/generateDataAttr';

import cx from 'classnames';

import styles from './Button.st.css';

import {
  oneOfType,
  string,
  node,
  oneOf,
  element,
  object,
  bool,
  func,
} from 'prop-types';

class Button extends PureComponent {
  static displayName = 'Button';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Additional classes */
    className: string,
    /** Skins of Button content */
    skin: oneOf([
      'standard',
      'inverted',
      'destructive',
      'premium',
      'dark',
      'light',
      'transparent',
      'premium-light',
    ]),
    /** Underline of Button content */
    priority: oneOf(['primary', 'secondary']),
    /** Size of Button content */
    size: oneOf(['tiny', 'small', 'medium', 'large']),
    /** Click event handler  */
    onClick: func,
    /** Sets button width to 100% */
    fullWidth: bool,
    /** Element based icon (svg, image etc.) */
    suffixIcon: element,
    /** Element based icon (svg, image etc.) */
    prefixIcon: element,
    /** Applies disabled styles */
    disabled: bool,
    /** String based node */
    children: node,
    /** String based data hook */
    dataHook: string,
  };

  static defaultProps = {
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
  };

  render() {
    const {
      skin,
      priority,
      size,
      className: userClassName,
      fullWidth,
      children,
      dataHook,
      ...rest
    } = this.props;

    const { className } = styles('root', {
      fluid: fullWidth,
      skin,
      priority,
      size,
    });
    const classNames = cx(className, userClassName);
    return (
      <ButtonNext
        {...rest}
        {...generateDataAttr(this.props, ['skin', 'size', 'weight'])}
        {...styles(
          'root',
          { fluid: fullWidth, skin, priority, size },
          this.props,
        )}
        data-hook={dataHook}
        className={classNames}
      >
        {children}
      </ButtonNext>
    );
  }
}

export default Button;
