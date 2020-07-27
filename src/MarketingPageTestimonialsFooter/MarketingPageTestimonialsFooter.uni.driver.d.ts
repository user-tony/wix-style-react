import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageTestimonialsFooterUniDriver extends BaseUniDriver {
  getNumberOfTestimonials(): Promise<number>;

  hasTestimonialAvatar(): Promise<boolean>;

  hasTestimonialText(): Promise<boolean>;

  getTestimonialText(): Promise<string>;

  hasTestimonialAuthorName(): Promise<boolean>;

  getTestimonialAuthorName(): Promise<string>;
}
