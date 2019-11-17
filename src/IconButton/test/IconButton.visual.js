import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import IconButton from '../IconButton';
import More from '../../new-icons/More';

import {
  getSkinBackground,
  renderButtonBlock,
} from '../../utils/ButtonHelpers';
import { SKINS, SIZES } from '../constants';

const skins = Object.values(SKINS).reduce((output, skin) => {
  return [...output, { skin, background: getSkinBackground(skin) }];
}, []);

const tests = [
  {
    describe: 'Sizes',
    its: Object.values(SIZES).map(size => ({
      it: size,
      props: { size, children: <More /> },
    })),
  },
];

const blockOfTests = [
  {
    it: 'Primary Skins',
    render: () =>
      renderButtonBlock({
        Component: IconButton,
        props: { children: <More /> },
        skins,
      }),
  },
  {
    it: 'Secondary Skins',
    render: () =>
      renderButtonBlock({
        Component: IconButton,
        props: { priority: 'secondary', children: <More /> },
        skins,
      }),
  },
];

visualize('IconButton', () => {
  blockOfTests.forEach(({ it, render }) => {
    snap(it, render);
  });

  tests.forEach(({ describe, its }) => {
    story(describe, () => {
      its.map(({ it, props }) => snap(it, () => <IconButton {...props} />));
    });
  });
});
