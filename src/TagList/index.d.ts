import * as React from 'react';
import { TagProps } from '../Tag';
import { ButtonProps } from '../Button';
import { TooltipProps } from '../Tooltip';
import { OmitPolyfill } from '../common';

export type TagListSize = 'small' | 'medium' | 'large';

export type TagListProps = {
  dataHook?: string;
  tags: Array<OmitPolyfill<TagProps, 'size' | 'onRemove'>>;
  size?: TagListSize;
  onTagRemove?: (id: string) => void;
  initiallyExpanded?: boolean;
  maxVisibleTags?: number;
  actionButton?: TagListActionButtonProps;
  toggleMoreButton?: (
    amountOfHiddenTags: number,
    isExpanded: boolean,
  ) => ToggleMoreButtonProps;
};

type TagListActionButtonProps = Pick<ButtonProps, 'onClick'> & {
  label?: string;
};

type ToggleMoreButtonProps = {
  label: string;
  tooltipProps?: TooltipProps;
};

export default class TagList extends React.PureComponent<TagListProps> {}
