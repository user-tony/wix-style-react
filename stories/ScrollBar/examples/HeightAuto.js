import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../../../src/Button';
import style from './HeightAuto.scss';

/* taking in consideration that the height can be maximum of 72 px. */
export function ExampleHeightAuto({ show }) {
  return (
    <div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={{
          enter: style.enterMaxHeight,
          enterActive: style.enterActiveMaxHeight,
          exit: style.exitMaxHeight,
          exitActive: style.exitActiveMaxHeight,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={style.notification}>
          <Button className={style.contentMaxHeight}>Content</Button>
        </div>
      </CSSTransition>
      text text text
    </div>
  );
}
