import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageFeaturesFooter from '../MarketingPageFeaturesFooter';
import { marketingPageFeaturesFooterPrivateDriverFactory } from './MarketingPageFeaturesFooter.private.uni.driver';

describe(MarketingPageFeaturesFooter.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageFeaturesFooterPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageFeaturesFooter />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<MarketingPageFeaturesFooter />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(
      <MarketingPageFeaturesFooter buttonText="Press me" />,
    );

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
