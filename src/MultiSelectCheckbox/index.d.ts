import InputWithOptions, {ManualInputFnSignature, InputWithOptionsProps} from '../InputWithOptions';
import {DropdownLayoutValueOption} from '../DropdownLayout';

export interface MultiSelectCheckboxProps
  extends InputWithOptionsProps<
    ManualInputFnSignature,
    MultiSelectOnSelectFnSignature
  > {
  selectedOptions?: DropdownLayoutValueOption[];
  onDeselect?: (
    id: DropdownLayoutValueOption['id'],
    option: DropdownLayoutValueOption,
  ) => void;
  delimiter?: string;
}

export default class MultiSelectCheckbox extends InputWithOptions<
  ManualInputFnSignature,
  MultiSelectOnSelectFnSignature,
  MultiSelectCheckboxProps
> {}

export type MultiSelectOnSelectFnSignature = (
  id: DropdownLayoutValueOption['id'],
  option: DropdownLayoutValueOption,
) => void;
