import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../src/Button';
import style from './ScrollBar.scss';

import { Category } from '../storiesHierarchy';

import { CSSTransition } from 'react-transition-group';

storiesOf(Category.FOUNDATION, module).add('1.8 ScrollBar', () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <TempNotification show={show} />
      text text text text text text text text text text text text
      <Button className={style.button} onClick={() => setShow(!show)}>
        Toggle
      </Button>
    </div>
  );
});

const NotificationBox = () => (
  <CSSTransition
    classNames={{
      enter: style.enter,
      enterActive: style.enterActive,
      exit: style.exit,
      exitActive: style.exitActive,
    }}
  >
    <div className={style.notification}></div>
  </CSSTransition>
);

class TempNotification extends React.Component {
  render() {
    const { show } = this.props;
    return show && <NotificationBox />;
  }
}
