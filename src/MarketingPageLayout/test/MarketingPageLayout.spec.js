import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayout from '../MarketingPageLayout';
import { marketingPageLayoutPrivateDriverFactory } from './MarketingPageLayout.private.uni.driver';

describe(MarketingPageLayout.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayout />);

    expect(await driver.exists()).toBe(true);
  });
});
