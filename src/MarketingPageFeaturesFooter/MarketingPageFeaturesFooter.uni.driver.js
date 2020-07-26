import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const marketingPageFeaturesFooterDriverFactory = (base, body) => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getFeatures = () => base.$$(`[data-hook="${dataHooks.feature}"]`);

  return {
    ...baseUniDriverFactory(base, body),

    /** Returns the number of the features that exist in the footer */
    getNumberOfFeatures: async () => await getFeatures().count(),

    /** Returns true if the feature has a title */
    hasTitle: async featureIndex =>
      await byHook(`${dataHooks.featureTitle}${featureIndex}`).exists(),

    /** Returns the feature's title*/
    getFeatureTitle: async featureIndex =>
      (
        await textUniDriverFactory(
          await byHook(`${dataHooks.featureTitle}${featureIndex}`),
        )
      ).getText(),

    /** Returns true if the feature has a text */
    hasText: async featureIndex =>
      await byHook(`${dataHooks.featureText}${featureIndex}`).exists(),

    /** Return the feature's text*/
    getFeatureText: async featureIndex =>
      (
        await textUniDriverFactory(
          await byHook(`${dataHooks.featureText}${featureIndex}`),
        )
      ).getText(),

    /** Returns true if the feature has an image */
    hasFeatureImage: async featureIndex =>
      await byHook(`${dataHooks.featureImage}${featureIndex}`).exists(),

    /** Returns the  feature image */
    getFeatureImage: async featureIndex =>
      await byHook(`${dataHooks.featureImage}${featureIndex}`)._prop(
        'firstChild',
      ),
  };
};
