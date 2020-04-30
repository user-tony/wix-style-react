import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import allComponents from '../utils/allComponents';
import Playground from 'wix-storybook-utils/Playground';
import exampleCode from '!raw-loader!./example';

import { Category } from '../storiesHierarchy';

const playgroundExplanation = `
# Playground
> "Design is not just what it looks like and feels like. Design is how it works" (Steve Jobs)


This playground is a great way to play with the \`wix-style-react\` components and create prototypes.
`;

storiesOf(Category.PLAYGROUND, module).add('Playground', () => (
  <div>
    <Markdown source={playgroundExplanation} />
    <Playground
      compact
      initiallyOpen
      initialCode={exampleCode}
      scope={allComponents}
      formatSnippetUrl={id => `${window.parent.location.href}&snippet=${id}`}
    />
  </div>
));
