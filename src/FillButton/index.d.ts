import * as React from 'react';
import { OmitPolyfill } from '../common';
import { TooltipNewProps } from '../Tooltip';

export interface FillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconSize?: FillButtonIconSize;
  disabled?: boolean;
  tooltipContent?: React.ReactNode;
  fill?: string;
  tooltipProps?: OmitPolyfill<TooltipNewProps, 'dataHook' | 'content' | 'size' | 'upgrade'>;
}

export default class FillButton extends React.PureComponent<FillButtonProps> {}
export type FillButtonIconSize = 'small' | 'medium';
