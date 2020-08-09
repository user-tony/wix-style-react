import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
// import { dataHooks } from './constants';

export const marketingPageLayoutContentDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    // /** Get the current count */
    // getCountText: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutContentCount}"]`).text(),
    //
    // /** Click the button */
    // clickButton: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutContentButton}"]`).click(),
    //
    // /** Get the button's text */
    // getButtonText: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutContentButton}"]`).text(),
  };
};
