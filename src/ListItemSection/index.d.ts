import * as React from 'react';

export type ListItemSectionTypes =
  | 'whitespace'
  | 'divider'
  | 'title'
  | 'subheader';

export interface ListItemSectionProps {
  dataHook?: string;
  className?: string;
  type?: ListItemSectionTypes;
  title?: string;
  suffix?: React.ReactNode;
  ellipsis?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

declare const ListItemSection: React.ComponentClass<ListItemSectionProps>;

export type listItemSectionBuilderObject = {
  id: string | number;
  overrideStyle: true;
  value: (props?: Partial<ListItemSectionProps>) => React.ReactNode;
};

export const listItemSectionBuilder: (data: {
  id: string | number;
  className?: string;
  type?: ListItemSectionTypes;
  title?: string;
  suffix?: React.ReactNode;
  ellipsis?: boolean;
}) => listItemSectionBuilderObject;

export default ListItemSection;
