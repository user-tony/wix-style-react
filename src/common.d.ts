export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

export type IconElement = React.ReactElement<any>;

export type WixComponentClickOutsideEventHandler = (
  e: TouchEvent | MouseEvent
) => void;

export type OmitPolyfill<T, K extends keyof any> = Pick<
  T,
  Exclude<keyof T, K>
  >;

export interface FocusOptionsPolyfill {
  preventScroll?: boolean;
}

