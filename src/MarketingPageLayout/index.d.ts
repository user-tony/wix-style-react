import * as React from 'react';

export interface MarketingPageLayoutProps {
  dataHook?: string;
  className?: string;
  size?: MarketingPageLayoutSize;
  sidePadding?: boolean;
  verticalPadding?: boolean;
  content?: React.ReactNode;
  image?: React.ReactNode;
  footer?: React.ReactNode;
}

export default class MarketingPageLayout extends React.PureComponent<MarketingPageLayoutProps>{}


export type MarketingPageLayoutSize = 'medium' | 'large';
