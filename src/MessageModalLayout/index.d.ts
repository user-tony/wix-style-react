import * as React from 'react';
import {BaseModalLayoutProps} from "../BaseModalLayout";

export interface MessageModalLayoutProps extends BaseModalLayoutProps {
  className?: string,
  dataHook?: string,
  illustration: React.ReactNode,
  theme: 'standard' | 'alert' | 'premium',
}


export default class MessageModalLayout extends React.PureComponent<MessageModalLayoutProps>{}
