import * as React from 'react';


export interface CustomModalLayoutProps {
  className?: string,
  dataHook?: string,
  title?: React.ReactNode,
  subtitle?: string,
  primaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  primaryButtonProps?: object,
  primaryButtonOnClick?: () => void,
  secondaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  secondaryButtonProps?: object,
  secondaryButtonOnClick?: () => void,
  onCloseButtonClick?: () => void,
  removeContentPadding?: boolean,
  footnote?: React.ReactNode,
  sideActions?: React.ReactNode,
  width?: string,
  children: React.ReactNode,
}

export default class CustomModalLayout extends React.PureComponent<CustomModalLayoutProps>{}
