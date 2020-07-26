import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageFeaturesFooterUniDriver extends BaseUniDriver {
  getNumberOfFeatures(): Promise<number>;
  hasTitle(): Promise<boolean>;
  getFeatureTitle(): Promise<string>;
  hasText(): Promise<boolean>;
  getFeatureText(): Promise<string>;
  hasFeatureImage(): Promise<boolean>;
  getFeatureImage(): Promise<any>;
}
