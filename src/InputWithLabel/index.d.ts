import * as React from 'react';
import {InputStatus} from '../Input';

export interface InputWithLabelProps {
  dataHook?: string;
  suffix?: React.ReactNode[];
  label?: string;
  value?: string | number;
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  type?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  customInput?: React.ReactNode | Function;
}

export default class InputWithLabel extends React.Component<InputWithLabelProps> {}
