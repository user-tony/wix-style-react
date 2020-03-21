import * as React from 'react';
import { PopoverCommonProps } from '../../common';

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  infoTooltipProps?: PopoverCommonProps;
  infoTooltipContent?: string;
  showDivider?: boolean;
}
export default class Header extends React.PureComponent<HeaderProps> {}
