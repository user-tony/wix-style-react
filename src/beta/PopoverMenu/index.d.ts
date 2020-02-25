import * as React from 'react';
import {
  AppendTo,
  Placement,
} from 'wix-ui-core/dist/src/components/popover/Popover.d';

export interface PopoverMenuNextProps {
  triggerElement: React.ReactNode;
  children?: React.ReactNode;
  maxWidth?: number;
  minWidth?: number;
  zIndex?: number;
  moveBy?: { x: number; y: number };
  placement?: Placement;
  textSize?: 'small' | 'medium';
  appendTo?: AppendTo;
  flip?: boolean;
  fixed?: boolean;
  showArrow?: boolean;
  wrapText?: boolean;
  dataHook?: string;
}

export interface PopoverMenuNextMenuItemProps {
  text?: string;
  onClick?: () => any;
  skin?: 'dark' | 'destructive';
  prefixIcon?: React.ReactNode;
  dataHook?: string;
  disabled?: boolean;
}

export interface PopoverMenuNextDividerProps {
  dataHook?: string;
}

export default class PopoverMenuNext<
  T extends PopoverMenuNextProps
> extends React.PureComponent<T> {
  static MenuItem: (props?: PopoverMenuNextMenuItemProps) => React.ReactElement;
  static Divider: (props?: PopoverMenuNextDividerProps) => React.ReactElement;
}
