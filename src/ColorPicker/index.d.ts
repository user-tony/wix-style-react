import * as React from 'react';

export interface ColorPickerProps {
  dataHook?: string;
  value: string | object;
  showHistory?: boolean;
  showConverter?: boolean;
  showInput?: boolean;
  onChange: (color: string | object) => void;
  onCancel: (color: string | object) => void;
  onConfirm: (color: string | object) => void;
  onAdd?: (color: string | object) => void;
  addTooltipContent?: React.ReactNode;
  allowEmpty?: boolean;
  emptyPlaceholder?: string;
}

export default class ColorPicker extends React.Component<ColorPickerProps> {}
