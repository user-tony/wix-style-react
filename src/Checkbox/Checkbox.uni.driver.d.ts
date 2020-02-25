import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { LabelUniDriver } from '../Label/Label.uni.driver';

export interface CheckboxUniDriver extends BaseUniDriver {
  click: () => Promise<void>;
  focus: () => Promise<void>;
  blur: () => Promise<void>;
  /**
   * @deprecated
   */
  hasFocusState: () => Promise<string | null>;
  isChecked: () => Promise<boolean>;
  isDisabled: () => Promise<boolean>;
  isIndeterminate: () => Promise<boolean>;
  hasError: () => Promise<boolean>;
  getLabel: () => Promise<string>;
  getLabelDriver: () => LabelUniDriver;
  getErrorMessage: () => Promise<string>;
}
