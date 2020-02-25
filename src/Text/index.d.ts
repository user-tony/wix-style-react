import * as React from 'react';
import {EllipsisHOCProps} from '../common/EllipsisHOC';

export interface TextProps extends EllipsisHOCProps {
  dataHook?: string;
  tagName?: string;
  className?: string;
  size?: TextSize;
  secondary?: boolean;
  skin?: TextSkin;
  light?: boolean;
  weight?: TextWeight;
}

export const Text: React.SFC<TextProps>;
export default Text;

export type TextSize = 'tiny' | 'small' | 'medium';

export type TextSkin =
  | 'standard'
  | 'error'
  | 'success'
  | 'premium'
  | 'disabled';

export type TextWeight = 'thin' | 'normal' | 'bold';
