import * as React from 'react';

import { AccordionItemProps, AccordionItemButtonType } from './AccordionItem';

export interface AccordionItem {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  expandLabel?: React.ReactNode;
  collapseLabel?: React.ReactNode;
  buttonType?: AccordionItemButtonType;
  open?: boolean;
  initiallyOpen?: boolean;
  disabled?: boolean;
  onToggle?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
  items?: AccordionItem[];
  skin?: AccordionItemProps['skin'];
  hideShadow?: boolean;
}

export default class Accordion extends React.Component<AccordionProps> {}
