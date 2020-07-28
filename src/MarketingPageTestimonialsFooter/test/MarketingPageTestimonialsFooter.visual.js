import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingPageTestimonialsFooter from '../MarketingPageTestimonialsFooter';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import Avatar from '../../Avatar';

const commonProps = {
  testimonials: [
    {
      id: '0001',
      avatar: <Avatar name="Guy in glasses" size="size60" />,
      text: 'I love it! This product is exactly what I needed.',
      authorName: 'Guy in glasses',
    },
    {
      id: '0002',
      avatar: <Avatar name="Person with a hat" size="size60" />,
      text: 'Amazing! It helped me to solve my problems.',
      authorName: 'Person with a hat',
    },
    {
      id: '0003',
      avatar: <Avatar name="Smiling lady" size="size60" />,
      text: 'A perfect tool for my every day tasks.',
      authorName: 'Smiling lady',
    },
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      // {
      //   it: 'default',
      //   props: {},
      // },
    ],
  },
  {
    describe: 'sizes',
    its: [
      // {
      //   it: 'small',
      //   props: {
      //     size: 'small'
      //   },
      // },
      // {
      //   it: 'medium',
      //   props: {
      //     size: 'medium'
      //   },
      // },
      // {
      //   it: 'large - (default)',
      //   props: {
      //   },
      // },
    ],
  },
];

const rtlTests = [
  {
    describe: 'rtl',
    its: [
      // {
      //   it: 'rtl',
      //   props: {
      //   },
      // },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageTestimonialsFooter.displayName}${
        describe ? '/' + describe : ''
      }`,
      module,
    ).add(it, () => (
      <MarketingPageTestimonialsFooter {...commonProps} {...props} />
    ));
  });
});

rtlTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageTestimonialsFooter.displayName}${
        describe ? '/' + describe : ''
      }`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <MarketingPageTestimonialsFooter {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
