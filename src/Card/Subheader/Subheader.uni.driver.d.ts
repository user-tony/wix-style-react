import { BaseUniDriver, UniDriver } from 'wix-ui-test-utils/unidriver';
import {UniDriverFactory} from "wix-ui-test-utils/uni-driver-factory";

export interface SubheaderUniDriver extends BaseUniDriver {
  title(): Promise<string>;
  titleNode(): UniDriver;
  suffixNode(): UniDriver;
}
