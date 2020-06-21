import React from 'react';
import { Animator } from 'wix-animations';
import Button from '../../../src/Button';
import style from './Animator2.scss';
import Text from '../../../src/Text';

export const ExampleAnimator2 = ({ show }) => (
  <div style={{ backgroundColor: 'yellow' }}>
    <Animator
      show={show}
      childClassName={style.animatorContent}
      height={e => {
        const { height } = window.getComputedStyle(e.firstChild);
        e.style.height = height;
        return Number(height.substr(0, height.length - 2));
      }}
    >
      <div className={style.wrapper}>
        <div className={style.notification}>
          <Text>
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with{' '}
          </Text>
          <Button>Content</Button>
        </div>
      </div>
    </Animator>
    <div>text text text</div>
  </div>
);
