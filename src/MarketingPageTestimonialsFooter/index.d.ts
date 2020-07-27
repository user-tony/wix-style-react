import * as React from 'react';

export interface MarketingPageTestimonialsFooterProps {
  dataHook?: string;
  className?: string;
  size?: MarketingPageTestimonialsFooterSize;
  testimonials?: TestimonialType[];
}

export default class MarketingPageTestimonialsFooter extends React.PureComponent<MarketingPageTestimonialsFooterProps>{}

export type MarketingPageTestimonialsFooterSize = 'small' | 'medium' | 'large';

export type TestimonialType = {
  id: string | number;
  avatar: React.ReactNode;
  text: string;
  authorName: string;
};
