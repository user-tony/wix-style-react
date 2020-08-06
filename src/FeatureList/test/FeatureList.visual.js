import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureList from '../FeatureList';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const commonProps = {
  features: [
    {
      id: '0001',
      image: <img width={60} height={60} />,
      title: 'Remove Wix Ads',
      text:
        "Enjoy a website that's completely your own brand by removing Wix ads.",
    },
    {
      id: '0002',
      image: <img width={60} height={60} />,
      title: 'Connect a Custom Domain',
      text: 'Get your business found with a custom domain.',
    },
    {
      id: '0003',
      image: <img width={60} height={60} />,
      title: 'Accept Online Payment',
      text: 'Let your customers and clients pay you online at checkout.',
    },
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'no title',
        props: {
          features: [
            {
              id: '0001',
              image: <img width={60} height={60} />,
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              id: '0002',
              image: <img width={60} height={60} />,
              text: 'Get your business found with a custom domain.',
            },
            {
              id: '0003',
              image: <img width={60} height={60} />,
              text:
                'Let your customers and clients pay you online at checkout.',
            },
          ],
        },
      },
      {
        it: 'no text',
        props: {
          features: [
            {
              id: '0001',
              image: <img width={60} height={60} />,
              title: 'Remove Wix Ads',
            },
            {
              id: '0002',
              image: <img width={60} height={60} />,
              title: 'Connect a Custom Domain',
            },
            {
              id: '0003',
              image: <img width={60} height={60} />,
              title: 'Accept Online Payment',
            },
          ],
        },
      },
      {
        it: 'no image',
        props: {
          features: [
            {
              id: '0001',
              title: 'Remove Wix Ads',
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              id: '0002',
              title: 'Connect a Custom Domain',
              text: 'Get your business found with a custom domain.',
            },
            {
              id: '0003',
              title: 'Accept Online Payment',
              text:
                'Let your customers and clients pay you online at checkout.',
            },
          ],
        },
      },
    ],
  },
];

const rtlTests = [
  {
    describe: 'rtl',
    its: [
      {
        it: 'rtl',
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FeatureList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FeatureList {...commonProps} {...props} />);
  });
});

rtlTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FeatureList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <FeatureList {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
