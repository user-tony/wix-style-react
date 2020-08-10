import React from 'react';
import PropTypes from 'prop-types';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { isSameDay, setYear, setMonth, setDate } from 'date-fns';
import Popover from '../Popover';
import Calendar from '../Calendar';
import DateInput from './DateInput';

import { PopoverCommonProps } from '../common/PropTypes/PopoverCommon';
import deprecationLog from '../utils/deprecationLog';

import { classes } from './DatePicker.st.css';

/**
 * DatePicker component
 *
 * ### Keyboard support
 * * `Left`: Move to the previous day.
 * * `Right`: Move to the next day.
 * * `Up`: Move to the previous week.
 * * `Down`: Move to the next week.
 * * `PgUp`: Move to the previous month.
 * * `PgDn`: Move to the next month.
 * * `Home`: Move to the previous year.
 * * `End`: Move to the next year.
 * * `Enter`/`Esc`/`Tab`: close the calendar. (`Enter` & `Esc` calls `preventDefault`)
 *
 */

export default class DatePicker extends React.PureComponent {
  static displayName = 'DatePicker';

  static defaultProps = {
    locale: 'en',
    filterDate: () => true,
    rtl: false,
    width: 150,
    zIndex: 1,
    disabled: false,
    inputDataHook: 'date-picker-input',
    popoverProps: {
      placement: 'top-start',
      zIndex: 1,
    },
    firstDayOfWeek: 1,
  };

  constructor(props) {
    super(props);

    const initialOpen = props.initialOpen && !props.disabled;

    this.state = {
      value: props.value || new Date(),
      isOpen: initialOpen,
      isDateInputFocusable: !props.initialOpen,
    };

    deprecationLog(
      'dateFormat prop is deprecated and will be removed as part of the next major version, please use dateFormatV2',
    );
  }

  openCalendar = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
        isDateInputFocusable: false,
        value: this.props.value || new Date(),
      });
    }
  };

  closeCalendar = () => {
    this.setState({ isOpen: false }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
    /*
      to fix case when user press tab in opened Calendar and:
        1. Calendar become closed
        2. Focus triggered
        3. openCalendar triggered by focus
        4. Calendar become visible
        5. Looks like nothing happen
      We need to do such steps:
       1. Close calendar(with isDateInputFocusable: false)
       2. After calendar is closed, on next event loop(after focus is fired)  make isDateInputFocusable: focusable
       to allow user to press tab in future and open Calendar
    */
    setTimeout(() => this.makeInputFocusable());
  };

  makeInputFocusable = () => this.setState({ isDateInputFocusable: true });

  _saveNewValue = (value, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    const isChanged = !isSameDay(value, this.props.value);

    if (isChanged) {
      const oldValue =
        this.props.value || new Date(new Date().setHours(0, 0, 0, 0));
      const newValue = [
        [value.getFullYear(), setYear],
        [value.getMonth(), setMonth],
        [value.getDate(), setDate],
      ].reduce(
        (_value, [datePart, setter]) => setter(_value, datePart),
        oldValue,
      );

      this.setState({ value: newValue }, () => this.props.onChange(newValue));
    }
  };

  _handleKeyDown = event => {
    // TODO: dirty for now
    // tab key should move focus so can't preventDefault
    if (event.keyCode !== 9) {
      event.preventDefault();
    }

    if (!this.state.isOpen) {
      this.openCalendar();
    }

    // keyHandler(this.state.value);
  };

  onClickOutside() {
    this.closeCalendar();
  }

  _renderInputWithRefForward = () =>
    React.forwardRef((props, ref) => this._renderInput({ ...props, ref }));

  _renderInput = () => {
    const {
      inputDataHook,
      disabled,
      placeholderText,
      readOnly,
      value: initialValue,
      status,
      statusMessage,
      customInput,
      dateFormatV2,
      dateFormat,
      inputProps = {},
    } = this.props;
    const { onFocus, ...inputPropsRest } = inputProps;
    return (
      <DateInput
        dataHook={inputDataHook}
        value={initialValue}
        /* This line normally does nothing, because once clicked, component is already focused, hence onFocus
        kicks in and open the calendar.
        Why do we still keep this line? Backward compatibility for clients that test the component and simulate click
        without simulating focus first. */
        onInputClicked={this.openCalendar}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholderText}
        onFocus={e => {
          onFocus && onFocus(e);
          this.openCalendar(e);
        }}
        onKeyDown={this._handleKeyDown}
        tabIndex={this.state.isDateInputFocusable ? 0 : -1}
        status={status}
        statusMessage={statusMessage}
        autoSelect={false}
        dateFormat={dateFormat}
        dateFormatV2={dateFormatV2}
        customInput={customInput}
        {...(customInput ? customInput.props : {})}
        {...inputPropsRest}
      />
    );
  };

  render() {
    const {
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      shouldCloseOnSelect,
      width,
      calendarDataHook,
      twoMonths,
      locale,
      zIndex,
      dataHook,
      popoverProps,
      firstDayOfWeek,
    } = this.props;

    const { isOpen, value } = this.state;

    const calendarProps = {
      dataHook: 'date-picker-calendar',
      locale,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      onChange: this._saveNewValue,
      onClose: this.closeCalendar,
      value,
      shouldCloseOnSelect,
      numOfMonths: twoMonths ? 2 : 1,
      firstDayOfWeek,
    };

    return (
      <Popover
        className={classes.root}
        dataHook={dataHook}
        onClickOutside={this.closeCalendar}
        appendTo="parent"
        shown={isOpen}
        zIndex={zIndex}
        {...popoverProps}
      >
        <Popover.Element>
          <div style={{ width }} data-hook="date-picker-input-container">
            <DayPickerInput
              component={this._renderInputWithRefForward()}
              keepFocus={false}
            />
          </div>
        </Popover.Element>
        <Popover.Content>
          <div data-hook={calendarDataHook}>
            <Calendar {...calendarProps} />
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

DatePicker.propTypes = {
  ...Calendar.propTypes,

  /** Can provide Input with your custom props. If you don't need a custom input element, and only want to pass props to the Input, then use inputProps prop. I think this is not in use outside of WSR, and can be deprecated. */
  customInput: PropTypes.node,

  /** Properties appended to the default Input component or the custom Input component. */
  inputProps: PropTypes.object,

  /** this prop is deprecated and should not be used
   * @deprecated
   */
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Custom date format V2, can be either:
   * * `string` of tokens (see [`date-fns V2` docs](https://date-fns.org/v2.15.0/docs/format) for list of supported tokens)
   * * `function` of signature `Date -> String`
   */
  dateFormatV2: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** DatePicker instance locale */
  locale: PropTypes.oneOfType([
    PropTypes.oneOf([
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
    ]),
    PropTypes.shape({
      distanceInWords: PropTypes.object,
      format: PropTypes.object,
    }),
  ]),

  /** Is the DatePicker disabled */
  disabled: PropTypes.bool,

  /** dataHook for the DatePicker's Input */
  inputDataHook: PropTypes.string,

  /** calendarDataHook for the DatePicker's calendar view */
  calendarDataHook: PropTypes.string,

  /** placeholder of the Input */
  placeholderText: PropTypes.string,

  /** RTL mode */
  rtl: PropTypes.bool,

  /** The selected date */
  value: PropTypes.object,

  /** Controls the whether the calendar will be initially visible or not */
  initialOpen: PropTypes.bool,

  /** Sets UI to indicate a status */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** set desired width of DatePicker input */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** set desired z-index of DatePicker popover */
  zIndex: PropTypes.number,

  popoverProps: PropTypes.shape(PopoverCommonProps),

  /** First day of the week, allowing only from 0 to 6 (Sunday to Saturday) */
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};
