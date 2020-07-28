import * as React from 'react';
import { TagProps } from '../Tag';
import { ButtonProps } from '../Button';

export type TagListSize = 'small' | 'medium' | 'large';

export type TagListProps = {
  dataHook?: string;
  tags: Array<Omit<TagProps, 'size'>>;
  size?: TagListSize;
  onTagRemove?: (id: string) => void;
  actionButton?: TagListActionButtonProps;
};

type TagListActionButtonProps = Pick<ButtonProps, 'onClick'> & {
  label?: string;
};

export default class TagList extends React.PureComponent<TagListProps> {}
