import * as React from 'react';
import {
  BaseModalLayoutProps,
  IllustrationProps,
  HeaderProps,
  ContentProps,
  FooterProps,
  FootnoteProps,
} from '../BaseModalLayout';

export interface AnnouncementModalLayoutProps
  extends BaseModalLayoutProps,
    IllustrationProps,
    HeaderProps,
    ContentProps,
    FooterProps,
    FootnoteProps {
  linkText?: string;
  linkOnClick?: () => void;
}

export const AnnouncementModalLayout: React.FunctionComponent<AnnouncementModalLayoutProps>;
