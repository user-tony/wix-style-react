import * as React from 'react';

import {InputProps} from '../Input';

export interface NumberInputProps extends InputProps {
  strict?: boolean;
}

export default class NumberInput extends React.PureComponent<NumberInputProps> {}
