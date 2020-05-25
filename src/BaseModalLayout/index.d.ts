import * as React from 'react';

export type ModalTheme = 'standard' | 'premium' | 'destructive';

export interface BaseModalLayoutProps {
  className?: string;
  dataHook?: string;
  theme?: ModalTheme;
  onCloseButtonClick?(): void;
}

export const BaseModalLayout: React.FunctionComponent<BaseModalLayoutProps>;

export * from './LayoutBlocks';
