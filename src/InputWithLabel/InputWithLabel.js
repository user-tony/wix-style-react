import React from 'react';
import StatusAlertSmall from 'wix-ui-icons-common/StatusAlertSmall';

import LabelledElement from '../LabelledElement';
import Input from '../Input';
import Text from '../Text';
import PropTypes from 'prop-types';
import styles from './InputWithLabel.st.css';
import dataHooks from './dataHooks';
import classNames from 'classnames';

const getSuffixContainer = suffix =>
  suffix.map((item, index) => {
    return (
      <div
        data-hook={`suffix-container`}
        key={`suffix-container-${index}`}
        className={styles.groupIcon}
      >
        {item}
      </div>
    );
  });

class InputWithLabel extends React.Component {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.PropTypes.string,
    /** Array of suffix icons */
    suffix: PropTypes.PropTypes.arrayOf(PropTypes.PropTypes.element),
    /** Text of rendered label */
    label: PropTypes.PropTypes.string,
    /** Input value */
    value: PropTypes.PropTypes.oneOfType([
      PropTypes.PropTypes.string,
      PropTypes.PropTypes.number,
    ]),
    /** Input status - use to display an status indication for the user. for example: 'error', 'warning' or 'loading' */
    status: PropTypes.PropTypes.oneOf([
      Input.StatusError,
      Input.StatusWarning,
      Input.StatusLoading,
    ]),
    /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
    statusMessage: PropTypes.PropTypes.node,
    /** Standard input onFocus callback */
    onFocus: PropTypes.PropTypes.func,
    /** Standard input onBlur callback */
    onBlur: PropTypes.PropTypes.func,
    /** Standard input onChange callback */
    onChange: PropTypes.PropTypes.func,
    name: PropTypes.PropTypes.string,
    type: PropTypes.PropTypes.string,
    ariaLabel: PropTypes.PropTypes.string,
    /** Standard React Input autoFocus (focus the element on mount) */
    autoFocus: PropTypes.PropTypes.bool,
    /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
    autocomplete: PropTypes.PropTypes.string,
    /** when set to true this component is disabled */
    disabled: PropTypes.PropTypes.bool,
    /** A single CSS class name to be passed to the Input element. */
    className: PropTypes.PropTypes.string,
    /** Input max length */
    maxLength: PropTypes.PropTypes.number,
    /** Placeholder to display */
    placeholder: PropTypes.PropTypes.string,
    /** Use a customized input component instead of the default html input tag */
    customInput: PropTypes.PropTypes.elementType
      ? PropTypes.PropTypes.oneOfType([
          PropTypes.PropTypes.func,
          PropTypes.PropTypes.node,
          PropTypes.PropTypes.elementType,
        ])
      : PropTypes.PropTypes.oneOfType([
          PropTypes.PropTypes.func,
          PropTypes.PropTypes.node,
        ]),
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
        className={status ? undefined : styles.statusMessagePlaceholder}
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
            className={classNames(className, styles.inputContainer)}
            size="medium"
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
            className={styles.statusMessage}
          >
            <span className={styles.statusMessageIcon}>
              <StatusAlertSmall />
            </span>
            <span
              data-hook={dataHooks.errorMessage}
              className={styles.errorMessageContent}
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
