import InputWithOptions, {
  ManualInputFnSignature,
  InputWithOptionsProps,
} from '../InputWithOptions';
import {
  DropdownLayoutValueOption,
  DropdownLayoutProps,
} from '../DropdownLayout';
import { listItemSelectBuilderObject } from '../ListItemSelect';
import { listItemSectionBuilderObject } from '../ListItemSection';

export interface MultiSelectCheckboxProps
  extends InputWithOptionsProps<
    ManualInputFnSignature,
    MultiSelectOnSelectFnSignature
  > {
  selectedOptions?: DropdownLayoutProps['selectedId'][];
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


export const builderParser: (option : listItemSelectBuilderObject | listItemSectionBuilderObject ) => {
  title: string;
};
