import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';

export const marketingPageLayoutContentDriverFactory = (base, body) => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);

  return {
    ...baseUniDriverFactory(base, body),

    /** Returns true if an outline is exist. */
    hasOverline: async () => await byHook(dataHooks.overlineContainer).exists(),

    /** Returns the overline text. */
    getOutlineText: async () =>
      (
        await textUniDriverFactory(
          await byHook(dataHooks.overline).childNodes[0],
        )
      ).getText(),

    /** Returns true if an outline is exist. */
    hasTitle: async () => await byHook(dataHooks.title).exists(),

    /** Returns the title text. */
    getTitleText: async () =>
      (
        await headingUniDriverFactory(
          await byHook(dataHooks.title).childNodes[0],
        )
      ).getText(),

    /** Returns true if a subtitle is exist. */
    hasSubtitle: async () => await byHook(dataHooks.subtitle).exists(),

    /** Returns the subtitle text. */
    getSubtitleText: async () =>
      (
        await headingUniDriverFactory(
          await byHook(dataHooks.subtitle).childNodes[0],
        )
      ).getText(),

    /** Returns true if a content is exist. */
    hasContent: async () => await byHook(dataHooks.content).exists(),

    /** Returns the content text. */
    getContentText: async () =>
      (
        await textUniDriverFactory(
          await byHook(dataHooks.overline).childNodes[0],
        )
      ).getText(),

    /** Returns true if an actions is exist. */
    hasActions: async () => await byHook(dataHooks.actions).exists(),
  };
};
