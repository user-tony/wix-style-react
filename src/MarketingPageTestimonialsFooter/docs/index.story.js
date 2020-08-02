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

import MarketingPageTestimonialsFooter from '..';
import Avatar from '../../Avatar';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageTestimonialsFooter,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    testimonials: [
      {
        label: 'add testimonials',
        value: [
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
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageTestimonialsFooter.displayName}/`,
      component: <MarketingPageTestimonialsFooter buttonText="Click me!" />,
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
