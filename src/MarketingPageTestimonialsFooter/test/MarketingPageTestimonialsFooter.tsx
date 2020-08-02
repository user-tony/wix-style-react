import * as React from 'react';
import MarketingPageTestimonialsFooter from '..';
import { marketingPageTestimonialsFooterTestkitFactory } from '../../../testkit';
import { marketingPageTestimonialsFooterTestkitFactory as marketingPageTestimonialsFooterEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageTestimonialsFooterTestkitFactory as marketingPageTestimonialsFooterPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function marketingPageTestimonialsFooterWithMandatoryProps() {
  return <MarketingPageTestimonialsFooter />;
}

function marketingPageTestimonialsFooterWithAllProps() {
  return (
    <MarketingPageTestimonialsFooter
      dataHook="dataHook"
      testimonials={[
        {
          id: '0001',
          avatar: <div />,
          text: 'I love it! This product is exactly what I needed.',
          authorName: 'Guy in glasses'
        },
        {
          id: '0002',
          avatar: <div />,
          text: 'Amazing! It helped me to solve my problems.',
          authorName: 'Person with a hat'
        },
        {
          id: '0003',
          avatar: <div />,
          text: 'A perfect tool for my every day tasks.',
          authorName: 'Smiling lady'
        },
    ]}
    />
  );
}

async function testkits() {
  const testkit = marketingPageTestimonialsFooterTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageTestimonialsFooterEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPageTestimonialsFooterPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
