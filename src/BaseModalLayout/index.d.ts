import * as React from 'react';
import {ButtonProps} from "../Button";

export interface BaseModalLayoutProps {
  title?: React.ReactNode,
  subtitle?: string,
  primaryButtonText?: string,
  primaryButtonProps?: ButtonProps,
  primaryButtonOnClick?: () => void,
  secondaryButtonText?: string,
  secondaryButtonProps?: ButtonProps,
  secondaryButtonOnClick?: () => void,
  onCloseButtonClick?: () => void,
  removeContentPadding?: boolean,
  footnote?: React.ReactNode,
  sideActions?: React.ReactNode,
  children: React.ReactNode,
  additionalButtons?: React.ReactNode,
}

export default class BaseModalLayout extends React.PureComponent<BaseModalLayoutProps>{}
