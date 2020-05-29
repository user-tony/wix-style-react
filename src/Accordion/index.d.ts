import * as React from 'react';

<<<<<<< HEAD
export type AccordionItemButtonType = 'textButton' | 'button';
export type AccordionSkinType = 'standard' | 'light';
=======
import { AccordionItemProps } from './AccordionItem';
>>>>>>> f42c5708b... chore(*): accept className prop in components that extend Focusable

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
<<<<<<< HEAD
  items?: AccordionItem[];
<<<<<<< HEAD
  skin?: AccordionSkinType;
  hideShadow?: boolean;
}

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
}

=======
  skin?: 'light' | 'standard';
}

export type AccordionItemButtonType = 'textButton' | 'button';

>>>>>>> f42c5708b... chore(*): accept className prop in components that extend Focusable
=======
  items?: AccordionItemProps[];
  skin?: 'light' | 'standard';
}

>>>>>>> 7bdc34a64... chore(*): stylable migration
export default class Accordion extends React.Component<AccordionProps> {}
