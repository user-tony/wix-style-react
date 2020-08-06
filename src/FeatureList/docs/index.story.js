import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import FeatureList from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FeatureList,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    features: [
      {
        label: 'add features',
        value: [
          {
            id: '0001',
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Remove Wix Ads',
            text:
              "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Connect a Custom Domain',
            text: 'Get your business found with a custom domain.',
          },
          {
            id: '0003',
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Accept Online Payment',
            text: 'Let your customers and clients pay you online at checkout.',
          },
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FeatureList.displayName}/`,
      component: <FeatureList />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is used as a footer for the Marketing Page Layout.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: examples.basicExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
