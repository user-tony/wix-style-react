import { PopoverProps } from './Popover';

export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

export type IconElement = React.ReactElement<any>;

export type WixComponentClickOutsideEventHandler = (
  e: TouchEvent | MouseEvent,
) => void;

export type OmitPolyfill<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface FocusOptionsPolyfill {
  preventScroll?: boolean;
}

export type MoveByOffset = { x?: number; y?: number };

export interface PopoverCommonProps {
  appendTo?: PopoverProps['appendTo'];
  flip?: PopoverProps['flip'];
  fixed?: PopoverProps['fixed'];
  placement?: PopoverProps['placement'];
  timeout?: PopoverProps['timeout'];
  zIndex?: PopoverProps['zIndex'];
  moveArrowTo?: PopoverProps['moveArrowTo'];
  moveBy?: PopoverProps['moveBy'];
  hideDelay?: PopoverProps['hideDelay'];
  showDelay?: PopoverProps['showDelay'];
  width?: PopoverProps['width'];
  maxWidth?: PopoverProps['maxWidth'];
  minWidth?: PopoverProps['minWidth'];
  dynamicWidth?: PopoverProps['dynamicWidth'];
}
