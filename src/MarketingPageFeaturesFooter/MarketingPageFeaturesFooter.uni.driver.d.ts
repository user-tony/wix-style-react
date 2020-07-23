import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageFeaturesFooterUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
