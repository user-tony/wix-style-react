import * as React from 'react';
import { ScrollableContainerCommonProps } from '../../../common';

export interface ContentProps {
  className?: string;
  dataHook?: string;
  content?: string | React.ReactNode;
  contentHideDividers?: boolean;
  onContentScrollAreaChanged?: ScrollableContainerCommonProps['onScrollAreaChanged'];
}

export const Content: React.FunctionComponent<ContentProps>;
