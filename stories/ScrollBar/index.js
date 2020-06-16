import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Cell } from '../../src/Layout';
import { ExampleMaxHeight } from './examples/MaxHeight.js';
import { Category } from '../storiesHierarchy';
import Button from '../../src/Button';
import style from './examples/MaxHeight.scss';
import { ExampleAnimator } from './examples/Animator';

storiesOf(Category.FOUNDATION, module).add('1.8 ScrollBar', () => {
  const [showMaxHeight, setMaxHeight] = React.useState(false);

  return (
    <Layout>
      <Cell>
        <ExampleMaxHeight showMaxHeight={showMaxHeight} />
      </Cell>
      <Cell>
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
