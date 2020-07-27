import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageTestimonialsFooterUniDriver extends BaseUniDriver {
  getNumberOfTestimonials(): Promise<number>;

  hasTestimonialAvatar(): Promise<boolean>;

  getTestimonialAvatar(): Promise<any>;

  hasTestimonialText(): Promise<boolean>;

  getTestimonialText(): Promise<string>;

  hasTestimonialAuthorName(): Promise<boolean>;

  getTestimonialAuthorName(): Promise<string>;
}
