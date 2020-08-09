import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayoutContent from '../MarketingPageLayoutContent';
import { marketingPageLayoutContentPrivateDriverFactory } from './MarketingPageLayoutContent.private.uni.driver';

describe(MarketingPageLayoutContent.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutContentPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayoutContent />);

    expect(await driver.exists()).toBe(true);
  });
});
