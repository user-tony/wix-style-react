import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageFeaturesFooterUniDriver extends BaseUniDriver {
  getNumberOfFeatures(): Promise<number>;
  hasFeatureTitle(): Promise<boolean>;
  getFeatureTitle(): Promise<string>;
  hasFeatureText(): Promise<boolean>;
  getFeatureText(): Promise<string>;
  hasFeatureImage(): Promise<boolean>;
  getFeatureImage(): Promise<any>;
}