import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageTestimonialsFooter from '../MarketingPageTestimonialsFooter';
import { marketingPageTestimonialsFooterPrivateDriverFactory } from './MarketingPageTestimonialsFooter.private.uni.driver';

describe(MarketingPageTestimonialsFooter.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageTestimonialsFooterPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageTestimonialsFooter />);

    expect(await driver.exists()).toBe(true);
  });
});
