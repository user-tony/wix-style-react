import React from 'react';
import { storiesOf } from '@storybook/react';
import AnnouncementModalLayout from '../AnnouncementModalLayout';
import Text from '../../Text';

const commonProps = {
  title: 'All Your Info In One Place',
  children: (
    <Text>
      Meet your brand new General Info page. <br />
      We brought all your business information together here.
    </Text>
  ),
  primaryButtonText: 'Start Now',
  linkText: 'Learn More',
  onCloseButtonClick: () => {},
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'secondary button',
    its: [
      {
        it: 'with secondary button instead of link',
        props: {
          secondaryButtonText: 'Skip',
          link: false,
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'premium',
        props: {
          theme: 'premium',
        },
      },
    ],
  },
  {
    describe: 'footnote',
    its: [
      {
        it: 'with footnote',
        props: {
          footnote: (
            <Text size="small">
              By sending an invite, you agree to the <a>Wix Terms of Use</a>
            </Text>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `AnnouncementModalLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AnnouncementModalLayout {...commonProps} {...props} />);
  });
});
