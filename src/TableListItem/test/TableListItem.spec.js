import React from 'react';
import sinon from 'sinon';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';
import { tableListItemPrivateDriverFactory } from './TableListItem.private.uni.driver';
import TableListItem from '../index';

describe('TableListItem', () => {
  const render = createRendererWithUniDriver(tableListItemPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<TableListItem options={[]} />);

    expect(await driver.exists()).toBe(true);
  });

  describe('options prop', () => {
    it('should render options', async () => {
      const values = ['Hi', 'Hello'];
      const { driver } = render(
        <TableListItem
          options={values.map(value => ({
            value,
          }))}
        />,
      );

      expect(await driver.getOptionAt(0).text()).toContain(values[0]);
      expect(await driver.getOptionAt(1).text()).toContain(values[1]);
    });

    it('should display px, fr and % types correctly', async () => {
      const options = [
        { value: 'Hi', width: 20 },
        { value: 'Hello', width: '30%' },
        { value: 'Dzień dobry', width: '1fr' },
        { value: 'Guten tag', width: '20px' },
      ];
      const { driver } = render(<TableListItem options={options} />);

      expect(await driver.getStyle()).toContain(
        'grid-template-columns: 20px 30% 1fr 20px',
      );
    });

    it('should split space equally if width is not defined', async () => {
      const options = [
        { value: 'Hi' },
        { value: 'Hello' },
        { value: 'Dzień dobry' },
        { value: 'Guten tag' },
      ];
      const { driver } = render(<TableListItem options={options} />);

      expect(await driver.getStyle()).toContain(
        'grid-template-columns: 1fr 1fr 1fr 1fr',
      );
    });
  });

  describe('checkbox props', () => {
    it('should display checkbox', async () => {
      const { driver } = render(<TableListItem options={[]} checkbox />);
      expect(await driver.getCheckboxDriver().exists()).toBe(true);
      expect(await driver.getCheckboxDriver().isChecked()).toBe(false);
    });

    it('should display checked checkbox', async () => {
      const { driver } = render(
        <TableListItem options={[]} checkbox checked />,
      );
      expect(await driver.getCheckboxDriver().isChecked()).toBe(true);
    });

    it('should call onCheckboxChange when clicking checkbox container', async () => {
      const stub = sinon.stub();
      const { driver } = render(
        <TableListItem options={[]} checkbox onCheckboxChange={stub} />,
      );
      await driver.clickCheckboxContainer();
      expect(stub.calledOnce).toBe(true);
    });
  });

  describe('drag props', () => {
    it('should show drag handle', async () => {
      const { driver } = render(<TableListItem options={[]} draggable />);

      expect(await driver.isDragHandleExists()).toBe(true);
    });
  });
});
