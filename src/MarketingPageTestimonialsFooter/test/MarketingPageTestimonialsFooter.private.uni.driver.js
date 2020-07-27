import { marketingPageTestimonialsFooterDriverFactory as publicDriverFactory } from '../MarketingPageTestimonialsFooter.uni.driver';

export const marketingPageTestimonialsFooterPrivateDriverFactory = (
  base,
  body,
) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
