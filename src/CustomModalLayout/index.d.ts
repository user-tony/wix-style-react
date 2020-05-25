import * as React from 'react';
import {
  BaseModalLayoutProps,
  HeaderProps,
  ContentProps,
  FooterProps,
  FootnoteProps,
} from '../BaseModalLayout';

export interface CustomModalLayoutProps
  extends BaseModalLayoutProps,
    HeaderProps,
    ContentProps,
    FooterProps,
    FootnoteProps {
  width?: string;
}

export const CustomModalLayout: React.FunctionComponent<CustomModalLayoutProps>;
