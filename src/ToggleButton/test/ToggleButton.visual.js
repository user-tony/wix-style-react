import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import { storiesOf } from '@storybook/react';
import ToggleButton from '../ToggleButton';

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'tiny',
        props: {
          size: 'tiny',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'small',
        props: {
          size: 'small',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'large',
        props: {
          size: 'large',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'skin',
    its: [
      {
        it: 'standard',
        props: { labelValue: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'dark',
        props: {
          skin: 'dark',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'inverted',
        props: {
          skin: 'inverted',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'inverted selected',
        props: {
          skin: 'inverted',
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'shape',
    its: [
      {
        it: 'square',
        props: {
          shape: 'square',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'round',
        props: {
          shape: 'round',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'round selected',
        props: {
          shape: 'round',
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'round inverted selected',
        props: {
          shape: 'round',
          skin: 'inverted',
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'round disabled',
        props: {
          shape: 'round',
          disabled: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'round disabled selected',
        props: {
          shape: 'round',
          disabled: true,
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'border',
    its: [
      {
        it: 'true',
        props: {
          border: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true round',
        props: {
          border: true,
          shape: 'round',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true selected',
        props: {
          border: true,
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true inverted selected',
        props: {
          border: true,
          skin: 'inverted',
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true disabled',
        props: {
          border: true,
          disabled: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true disabled selected',
        props: {
          border: true,
          disabled: true,
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'selected',
    its: [
      {
        it: 'false',
        props: { labelValue: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'true',
        props: {
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'false',
        props: {
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true',
        props: {
          disabled: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true selected',
        props: {
          disabled: true,
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'labelPlacement',
    its: [
      {
        it: 'tooltip',
        props: {
          labelPlacement: 'tooltip',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'end',
        props: {
          labelPlacement: 'end',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'bottom',
        props: {
          labelPlacement: 'bottom',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ToggleButton${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <ToggleButton {...props} />,
    );
  });
});
