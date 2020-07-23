import { marketingPageFeaturesFooterDriverFactory as publicDriverFactory } from '../MarketingPageFeaturesFooter.uni.driver';

export const marketingPageFeaturesFooterPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
