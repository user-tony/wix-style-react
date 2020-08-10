import React from 'react';
import StatusAlertSmall from 'wix-ui-icons-common/StatusAlertSmall';

import LabelledElement from '../LabelledElement';
import Input from '../Input';
import Text from '../Text';
import PropTypes from 'prop-types';
import { classes } from './InputWithLabel.st.css';
import dataHooks from './dataHooks';

const getSuffixContainer = suffix =>
  suffix.map((item, index) => {
    return (
      <div
        data-hook={`suffix-container`}
        key={`suffix-container-${index}`}
        className={classes.groupIcon}
      >
        {item}
      </div>
    );
  });

class InputWithLabel extends React.Component {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Array of suffix icons */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** Text of rendered label */
    label: PropTypes.string,
    /** Input value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Input status - use to display an status indication for the user. for example: 'error', 'warning' or 'loading' */
    status: PropTypes.oneOf([
      Input.StatusError,
      Input.StatusWarning,
      Input.StatusLoading,
    ]),
    /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
    statusMessage: PropTypes.node,
    /** Standard input onFocus callback */
    onFocus: PropTypes.func,
    /** Standard input onBlur callback */
    onBlur: PropTypes.func,
    /** Standard input onChange callback */
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    /** Used to define a string that labels the current element in case where a text label is not visible on the screen. */
    ariaLabel: PropTypes.string,
    /** Standard React Input autoFocus (focus the element on mount) */
    autoFocus: PropTypes.bool,
    /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
    autocomplete: PropTypes.string,
    /** when set to true this component is disabled */
    disabled: PropTypes.bool,
    /** A single CSS class name to be passed to the Input element. */
    className: PropTypes.string,
    /** Input max length */
    maxLength: PropTypes.number,
    /** Placeholder to display */
    placeholder: PropTypes.string,
    /** Use a customized input component instead of the default html input tag */
    customInput: PropTypes.elementType
      ? PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.node,
          PropTypes.elementType,
        ])
      : PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  };

  static defaultProps = {
    statusMessage: '',
  };

  render() {
    const {
      label,
      suffix,
      value,
      dataHook,
      status,
      statusMessage,
      onChange,
      onFocus,
      onBlur,
      name,
      type,
      ariaLabel,
      autoFocus,
      autocomplete,
      disabled,
      className,
      maxLength,
      placeholder,
      customInput,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        className={status ? undefined : classes.statusMessagePlaceholder}
      >
        <LabelledElement
          value={value}
          label={label}
          dataHook={dataHooks.labelledElement}
        >
          <Input
            name={name}
            type={type}
            ariaLabel={ariaLabel}
            autoFocus={autoFocus}
            autocomplete={autocomplete}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            dataHook={dataHooks.input}
            className={className}
            size="large"
            value={value}
            suffix={suffix ? getSuffixContainer(suffix) : []}
            status={status}
            customInput={customInput}
            hideStatusSuffix
          />
        </LabelledElement>
        {status === Input.StatusError && statusMessage && (
          <Text
            skin="error"
            size="small"
            weight="normal"
            className={classes.statusMessage}
          >
            <span className={classes.statusMessageIcon}>
              <StatusAlertSmall />
            </span>
            <span
              data-hook={dataHooks.errorMessage}
              className={classes.errorMessageContent}
            >
              {statusMessage}
            </span>
          </Text>
        )}
      </div>
    );
  }
}

export default InputWithLabel;
