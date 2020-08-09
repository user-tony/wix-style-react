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

import MarketingPageLayoutContent from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageLayoutContent,
  componentPath: '..',

  componentProps: {
    overline: 'overline text',
    title: 'title text',
    subtitle: 'subtitle text',
    content: 'content text',
  },

  exampleProps: {
    actions: [
      {
        label: 'Action button',
        value: (
          <allComponents.Button size="large">Main Action</allComponents.Button>
        ),
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageLayoutContent.displayName}/`,
      component: <MarketingPageLayoutContent buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is used in the MarketingPageLayout component. It includes all the content of the page.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'This component is used in the MarketingPageLayout component. All the properties are optional and It could includes the following data: outline, title, subtitle, content and actions (buttons).',
            source: examples.basicExample,
          }),

          example({
            title: 'Sizes',
            text: 'There are 2 sizes: medium and large (default)',
            source: examples.sizesExample,
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
