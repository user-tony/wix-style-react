import WixComponent, {WixComponentProps } from '../BaseComponents/WixComponent';

export interface CheckboxProps extends WixComponentProps {
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  indeterminate?: boolean;
  errorMessage?: string;
  selectionArea?: CheckboxSelectionArea;
  vAlign?: CheckboxVAlign;
  hover?: boolean;
  size?: CheckboxSize;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export default class Checkbox extends WixComponent<CheckboxProps> {}

export type CheckboxSize = 'medium';
export type CheckboxSelectionArea = 'none' | 'hover' | 'always';
export type CheckboxVAlign = 'center' | 'top';
