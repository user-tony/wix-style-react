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

    /** Returns true if the feature has a title.
     * featureIndex - represents the index of the feature in the features array (starts from 0). */
    hasFeatureTitle: async featureIndex =>
      await byHook(`${dataHooks.featureTitle}${featureIndex}`).exists(),

    /** Returns the feature's title.
     * featureIndex - represents the index of the feature in the features array (starts from 0).*/
    getFeatureTitle: async featureIndex =>
      (
        await textUniDriverFactory(
          await byHook(`${dataHooks.featureTitle}${featureIndex}`),
        )
      ).getText(),

    /** Returns true if the feature has a text.
     * featureIndex - represents the index of the feature in the features array (starts from 0). */
    hasFeatureText: async featureIndex =>
      await byHook(`${dataHooks.featureText}${featureIndex}`).exists(),

    /** Return the feature's text.
     * featureIndex - represents the index of the feature in the features array (starts from 0).*/
    getFeatureText: async featureIndex =>
      (
        await textUniDriverFactory(
          await byHook(`${dataHooks.featureText}${featureIndex}`),
        )
      ).getText(),

    /** Returns true if the feature has an image.
     * featureIndex - represents the index of the feature in the features array (starts from 0).*/
    hasFeatureImage: async featureIndex =>
      await byHook(`${dataHooks.featureImage}${featureIndex}`).exists(),

    /** Returns the  feature image.
     * featureIndex - represents the index of the feature in the features array (starts from 0).*/
    getFeatureImage: async featureIndex =>
      await byHook(`${dataHooks.featureImage}${featureIndex}`)._prop(
        'firstChild',
      ),
  };
};
