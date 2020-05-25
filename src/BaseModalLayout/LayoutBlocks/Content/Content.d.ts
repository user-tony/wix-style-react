import * as React from 'react';
import { ScrollChangedData } from '../../../common/ScrollableContainer/ScrollableContainer';

interface ContentProps {
  content?: string | React.ReactNode;
  contentMaxHeight?: string | number;
  contentHideDividers?: boolean;
  onContentScrollPositionChanged?(scrollChangedData: ScrollChangedData): void;
}

export default class Content extends React.Component<ContentProps> {}
