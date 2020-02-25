import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { LabelDriver } from '../Label/Label.driver';

export interface CheckboxDriver extends BaseDriver {
  click: () => void;
  focus: () => void;
  blur: () => void;
  /**
   * Focus related testing is done in e2e tests only.
   * @deprecated
   */
  hasFocusState: () => string | null;
  isChecked: () => boolean;
  isDisabled: () => boolean;
  isIndeterminate: () => boolean;
  hasError: () => boolean;
  getLabel: () => string;
  getLabelDriver: () => LabelDriver;
  getErrorMessage: () => Promise<string>;
}
