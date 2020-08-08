import React from 'react';
import MultiSelectCheckbox, { builderParser } from '../MultiSelectCheckbox';
import { listItemSelectBuilder } from '../../ListItemSelect';
import { listItemSectionBuilder } from '../../ListItemSection';
import { multiSelectCheckboxUniDriverFactory } from '../MultiSelectCheckbox.uni.driver';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/react';
import { multiSelectCheckboxPrivateDriverFactory } from '../MultiSelectCheckbox.private.driver';

describe('multiSelectCheckbox', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(multiSelectCheckboxPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(multiSelectCheckboxUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);
    const createDriver = jsx => render(jsx).driver;

    const options = [
      { value: 'Alabama', id: 'Alabama-1' },
      { value: 'Alaska', id: 'Alaska' },
      { value: <div>Arkansas</div>, id: 'Arkansas', label: 'Arkansan Label' },
      { value: 'Arkansas', id: 'Arkansas' },
      { value: 'California', id: 'California' },
      { value: 'California2', id: 'California2' },
      { value: 'California3', id: 'California3' },
      { value: 'California4', id: 'California4' },
      { value: 'California5', id: 'California5' },
      { value: 'California6', id: 'California6' },
      { value: 'California7', id: 'California7', disabled: true },
      { value: 'Two words', id: 'Two words' },
    ];

    it('should not be editable', async () => {
      const { driver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      expect(await driver.isEditable()).toBe(false);
    });

    it('should show dropdown on input click', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should not show dropdown on input click when disabled', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox disabled options={options} />,
      );
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should close dropdown on second input click', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should close dropdown on Escape', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await inputDriver.focus();
      await inputDriver.keyDown({ key: 'Escape' });

      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    const OPEN_DROPDOWN_CHARS = [
      { key: 'ArrowDown', keyCode: 40, which: 40 },
      { key: 'Enter', keyCode: 13, which: 13 },
      { key: 'Space', keyCode: 32, which: 32 },
    ];
    OPEN_DROPDOWN_CHARS.forEach(charData => {
      it(`should show dropdown on input focus and press on ${charData.key}`, async () => {
        const { inputDriver, dropdownLayoutDriver } = createDriver(
          <MultiSelectCheckbox options={options} />,
        );
        await inputDriver.focus();
        await inputDriver.trigger('keyDown', charData);

        expect(await dropdownLayoutDriver.isShown()).toBe(true);
      });
    });

    it('should not lose Focus or close the list on selection with a mouse click', async () => {
      const { inputDriver, dropdownLayoutDriver, driver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );

      await inputDriver.focus();
      await driver.selectOptionById('Alabama-1');
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      expect(await inputDriver.isFocus()).toBe(true);
    });

    it('should display a selectedOptions separated by default delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value}, ${options[1].value}`,
      );
    });

    it('should display a selectedOptions separated by custom delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const delimiter = ';';
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          delimiter={delimiter}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value};${options[1].value}`,
      );
    });

    it('should not display the selectedOptions that not included in options', async () => {
      const selectedOptions = [options[0].id, 'NOT_LEGAL_ID', options[1].id];
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value}, ${options[1].value}`,
      );
    });

    it('should use provided valueParser that will enable handling option with a component in value', async () => {
      const specialOption = options.find(x => typeof x.value !== 'string');
      const selectedOptions = [specialOption.id];
      const valueParser = option =>
        typeof option.value === 'string' ? option.value : option.label;

      const { driver } = createDriver(
        <MultiSelectCheckbox
          valueParser={valueParser}
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await driver.getLabelAt(0)).toBe(specialOption.label);
    });

    describe('Builder Options', () => {
      it('should allow using builders as options', async () => {
        const options = [
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
        ];

        const selectedOptions = ['option1', 'option2'];

        const { driver, inputDriver } = createDriver(
          <MultiSelectCheckbox
            options={options}
            selectedOptions={selectedOptions}
            valueParser={builderParser}
          />,
        );

        expect(await driver.getNumOfLabels()).toBe(selectedOptions.length);
        expect(await driver.getLabelAt(0)).toBe(selectedOptions[0]);
        expect(await driver.getLabelAt(1)).toBe(selectedOptions[1]);
        expect(await inputDriver.getValue()).toBe(
          `${selectedOptions[0]}, ${selectedOptions[1]}`,
        );
      });
    });

    it('should contain specific selected values', async () => {
      const selectedOptions = [options[0].id, options[1].id];

      const { driver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await driver.getNumOfLabels()).toBe(selectedOptions.length);
      expect(await driver.getLabelAt(0)).toBe(options[0].value);
      expect(await driver.getLabelAt(1)).toBe(options[1].value);
    });

    it('should not close dropdown after clicking on an option', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should call onSelect when selecting unselected option', async () => {
      const onSelect = jest.fn();
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} onSelect={onSelect} />,
      );
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect).toHaveBeenCalledWith(options[0].id, options[0]);
    });

    it('should not call onSelect when selecting a disabled option', async () => {
      const onSelect = jest.fn();
      const indexOfDisabled = options.findIndex(opt => opt.disabled);
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} onSelect={onSelect} />,
      );
      await dropdownLayoutDriver.clickAtOption(indexOfDisabled);
      expect(onSelect).not.toHaveBeenCalled();
    });

    it('should call onDeselect when selecting selected option', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const onDeselect = jest.fn();
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          onDeselect={onDeselect}
        />,
      );
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onDeselect).toHaveBeenCalledWith(options[0].id, options[0]);
    });
  }
});
