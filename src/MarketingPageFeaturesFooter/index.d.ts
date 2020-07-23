import * as React from 'react';

export interface MarketingPageFeaturesFooterProps {
  dataHook?: string;
  className?: string;
  size?: MarketingPageFeaturesFooterSize;
  features?: FeatureType[];
}

export default class MarketingPageFeaturesFooter extends React.PureComponent<MarketingPageFeaturesFooterProps>{}

export type MarketingPageFeaturesFooterSize = 'small' | 'medium' | 'large';

export type FeatureType = {
  id: string | number;
  image: React.ReactNode;
  title: string;
  text: string;
};
