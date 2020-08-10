import * as React from 'react';
import { Placement, AppendTo } from 'wix-ui-core/dist/src/components/popover/Popover.d';
import { MoveByOffset } from '../common';

export type TooltipTextAlign = 'center' | 'start';
export type TooltipSize = 'small' | 'medium';

export interface TooltipProps {
  dataHook?: string;
  className?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  textAlign?: TooltipTextAlign;
  enterDelay?: number;
  exitDelay?: number;
  moveBy?: MoveByOffset;
  moveArrowTo?: number;
  appendTo?: AppendTo;
  flip?: boolean;
  fixed?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
  onShow?: () => void;
  onHide?: () => void;
  placement?: Placement;
  size?: TooltipSize;
  zIndex?: React.CSSProperties['zIndex'];
  close?: () => void;
  open?: () => void;
}

export default class Tooltip extends React.PureComponent<TooltipProps> {}
