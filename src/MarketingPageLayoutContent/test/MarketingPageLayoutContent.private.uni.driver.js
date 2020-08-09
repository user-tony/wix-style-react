import { marketingPageLayoutContentDriverFactory as publicDriverFactory } from '../MarketingPageLayoutContent.uni.driver';

export const marketingPageLayoutContentPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
