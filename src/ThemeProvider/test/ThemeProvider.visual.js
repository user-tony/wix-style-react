import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import Button from '../../Button';
import ToggleSwitch from '../../ToggleSwitch';
import { Cell, Layout } from '../../Layout';
import Input from '../../Input';
import Checkbox from '../../Checkbox';
import TextButton from '../../TextButton';
import ToggleButton from '../../ToggleButton';
import { CropRotate } from 'wix-ui-icons-common';
import SegmentedToggle from '../../SegmentedToggle';
import Box from '../../Box';
import { floatingPanels } from '../../Themes';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'Floating Panels',
        props: {
          theme: floatingPanels({ mainColor: '#ff0000' }),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${ThemeProvider.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <ThemeProvider {...props}>
        <Box width="250px">
          <Layout>
            <Cell>
              <Button>Hello!</Button>
            </Cell>
            <Cell>
              <ToggleSwitch checked />
              <ToggleSwitch />
            </Cell>
            <Cell>
              <Input placeholder="Hello!" />
            </Cell>
            <Cell>
              <Checkbox>Hello!</Checkbox>
            </Cell>
            <Cell>
              <TextButton>Hello!</TextButton>
            </Cell>
            <Cell>
              <ToggleButton selected>
                <CropRotate />
              </ToggleButton>
            </Cell>
            <Cell>
              <SegmentedToggle defaultSelected="1">
                <SegmentedToggle.Button value="1">
                  Hello!
                </SegmentedToggle.Button>
                <SegmentedToggle.Button value="2">
                  Hello!
                </SegmentedToggle.Button>
              </SegmentedToggle>
            </Cell>
          </Layout>
        </Box>
      </ThemeProvider>
    ));
  });
});
