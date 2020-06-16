import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Cell } from '../../src/Layout';
import { ExampleMaxHeight } from './examples/MaxHeight.js';
import { Category } from '../storiesHierarchy';
import Button from '../../src/Button';
import style from './examples/MaxHeight.scss';
import { ExampleAnimator } from './examples/Animator';
import Heading from '../../src/Heading';

storiesOf(Category.FOUNDATION, module).add('1.8 ScrollBar', () => {
  const [showMaxHeight, setMaxHeight] = React.useState(false);

  return (
    <Layout>
      <Cell>
        <Heading>Height is known and hard coded</Heading>
        <ExampleMaxHeight showMaxHeight={showMaxHeight} />
      </Cell>
      <Cell>
        <Heading>
          Using Animator for both Notification and Notification content
        </Heading>
        <ExampleAnimator show={showMaxHeight} />
      </Cell>
      <Cell>
        <Button
          className={style.button}
          onClick={() => setMaxHeight(!showMaxHeight)}
        >
          Close
        </Button>
      </Cell>
    </Layout>
  );
});
