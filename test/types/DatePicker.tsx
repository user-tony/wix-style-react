import * as React from 'react';
import DatePicker from '../../src/DatePicker';
import { datePickerTestkitFactory } from '../../dist/testkit';
import { datePickerTestkitFactory as datePickerEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import * as enzyme from 'enzyme';

function datePickerWithMandatoryProps() {
  return <DatePicker onChange={() => {}} />;
}

function datePickerWithAllProps() {
  return (
    <DatePicker
      customInput="customInput"
      inputProps="{}"
      dateFormat="string | Function"
      locale="en"
      disabled
      inputDataHook="string"
      calendarDataHook="string"
      placeholderText="string"
      rtl
      value="{}"
      isOpen
      initialOpen
      error
      errorMessage="errorMessage"
      width="number | string"
      zIndex={1}
      onChange={() => {}}
    />
  );
}

async function testkits() {
  const testkit = datePickerTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = datePickerEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
