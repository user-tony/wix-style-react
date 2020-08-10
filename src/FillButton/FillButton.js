import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import IconAdd from 'wix-ui-icons-common/Add';
import IconAddSmall from 'wix-ui-icons-common/AddSmall';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

import { st, classes } from './FillButton.st.css';
import Tooltip from '../Tooltip';
import Proportion from '../Proportion';
import { dataHooks } from './constants';
import { parseColor, parseGradient, parseContrastColor } from './utils';

const { iconSmall, iconMedium } = dataHooks;

/** FillButton */
class FillButton extends React.PureComponent {
  static displayName = 'FillButton';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,
    className: PropTypes.string,
    /** click handler */
    onClick: PropTypes.func,
    /** supports `small` and `medium` add icon size */
    iconSize: PropTypes.oneOf(['small', 'medium']),
    /** components disable state */
    disabled: PropTypes.bool,
    /** fill value in string. Hex or gradient */
    fill: PropTypes.string,
    /** When provided, hover will display a tooltip */
    tooltipContent: PropTypes.node,
    /** tooltip common props */
    tooltipProps: PropTypes.shape(TooltipCommonProps),
  };

  static defaultProps = {
    iconSize: 'small',
  };

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }
    return undefined;
  };

  _renderIcon = () => {
    const { iconSize, fill, disabled } = this.props;
    const AddIcon = iconSize === 'small' ? IconAddSmall : IconAdd;
    return (
      <AddIcon
        style={{ color: !disabled && parseContrastColor(fill) }}
        data-hook={iconSize === 'small' ? iconSmall : iconMedium}
      />
    );
  };

  render() {
    const {
      disabled,
      focusableOnBlur,
      focusableOnFocus,
      dataHook,
      fill,
      iconSize,
      tooltipContent,
      tooltipProps = {},
      className,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);

    // For backwards compatibility
    const content = tooltipProps.content || tooltipContent;

    return (
      <Tooltip
        appendTo="window"
        disabled={disabled}
        {...tooltipProps}
        content={content}
        dataHook={dataHook}
        size="small"
      >
        <Proportion className={classes.proportion}>
          <button
            {...rest}
            className={st(
              classes.root,
              { disabled, fill: !!background },
              className,
            )}
            style={{ ...background }}
            data-hook={dataHooks.button}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
            disabled={disabled}
          >
            {this._renderIcon()}
          </button>
        </Proportion>
      </Tooltip>
    );
  }
}

export default withFocusable(FillButton);
