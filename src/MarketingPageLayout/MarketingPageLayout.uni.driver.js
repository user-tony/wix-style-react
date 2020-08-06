import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const marketingPageLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    // /** Get the current count */
    // getCountText: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutCount}"]`).text(),
    //
    // /** Click the button */
    // clickButton: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutButton}"]`).click(),
    //
    // /** Get the button's text */
    // getButtonText: async () =>
    //   base.$(`[data-hook="${dataHooks.marketingPageLayoutButton}"]`).text(),
  };
};
