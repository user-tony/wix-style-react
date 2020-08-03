import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import MultiSelectCheckbox, { builderParser } from '../MultiSelectCheckbox';
import { listItemSelectBuilder } from '../../ListItemSelect';
import { listItemSectionBuilder } from '../../ListItemSection';
import { multiSelectCheckboxTestkitFactory } from '../../../testkit';
import DistributeGlobeSmall from 'wix-ui-icons-common/DistributeGlobeSmall';
import Box from '../../Box';

const interactiveDataHook = 'interactive-multiselectcheckbox';

const defaultProps = {
  options: [
    { value: 'Alabama', id: 'AL' },
    { value: 'Alaska', id: 'AK' },
    { value: 'Arizona', id: 'AZ' },
    { value: 'Arkansas', id: 'AR' },
    { value: 'California', id: 'CA' },
    { value: 'North Carolina', id: 'NC' },
    { value: 'Colorado', id: 'CO' },
    { value: 'Connecticut', id: 'CT' },
    { value: 'Delaware', id: 'DL' },
    { value: 'Florida', id: 'FL' },
    { value: 'Georgia', id: 'GA' },
    { value: 'Hawaii', id: 'HI' },
    { value: 'Idaho', id: 'IL' },
    { value: 'Illinois', id: 'IN' },
    { value: 'Indiana', id: 'IA' },
  ],
};

const createDriver = dataHook =>
  multiSelectCheckboxTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const interactiveTests = [
  {
    describe: '',
    its: [
      {
        it: 'Simple',
        props: {},
      },
      {
        it: 'Selected items',
        props: {
          selectedOptions: ['AL', 'AZ', 'AR'],
        },
      },
      {
        it: 'Disabled items',
        props: {
          selectedOptions: ['AL', 'AZ', 'AR'],
          options: defaultProps.options.map((option, index) => ({
            ...option,
            disabled: index > 2,
          })),
        },
      },
      {
        it: 'Custom items',
        props: {
          selectedOptions: ['AL', 'AZ', 'AR'],
          options: defaultProps.options.map((option, index) => ({
            value: (
              <Box>
                {option.value}
                <DistributeGlobeSmall />
              </Box>
            ),
            label: option.value,
            id: option.id,
            disabled: index > 2,
          })),
          valueParser: option => (option.label ? option.label : option.value),
        },
      },
      {
        it: 'Builders items',
        props: {
          selectedOptions: ['option1', 'option2'],
          options: [
            listItemSectionBuilder({
              id: 'title',
              title: 'title',
            }),
            listItemSelectBuilder({
              checkbox: true,
              value: 'option1',
              id: 'option1',
              title: 'option1',
              selected: true,
            }),
            listItemSelectBuilder({
              checkbox: true,
              value: 'option2',
              id: 'option2',
              title: 'option2',
              selected: true,
            }),
            listItemSelectBuilder({
              checkbox: true,
              value: 'option3',
              id: 'option3',
              title: 'option3',
              selected: false,
            }),
          ],
          valueParser: builderParser,
        },
      },
    ],
  },
];

const InteractiveEyeTest = ({ ...props }) => {
  useEffect(() => {
    (async function() {
      const driver = createDriver(interactiveDataHook).driver;
      await driver.pressKey('ArrowDown');
    })();
  });
  return <MultiSelectCheckbox dataHook={interactiveDataHook} {...props} />;
};

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `MultiSelectCheckbox${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <InteractiveEyeTest {...defaultProps} {...props} />);
  });
});
