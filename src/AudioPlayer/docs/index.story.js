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

import AudioPlayer from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AudioPlayer,
  componentPath: '..',

  componentProps: {
    src:
      'https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3',
    lazyLoad: false,
    html5Audio: false,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AudioPlayer.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'AudioPlayer component is used to load, play, pause and seek through an audio file.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'The component loads an audio file on initialization, press play to hear it.',
            source:
              '<AudioPlayer src="https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3" />',
          }),

          example({
            title: 'Lazy load',
            text: 'The given file is not loaded until play is pressed.',
            source:
              '<AudioPlayer lazyLoad src="https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3" />',
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
