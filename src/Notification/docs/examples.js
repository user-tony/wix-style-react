import { THEMES } from '../constants';

const wrapWithLayout = string => `
<Layout>
  ${string}
</Layout>`;

const sourceForThemes = theme => `
<Cell>
  <Notification theme="${theme}" show>
    <Notification.TextLabel>${theme} theme</Notification.TextLabel>
    <Notification.CloseButton/>
  </Notification>
</Cell>`;

export const themes = wrapWithLayout(
  Object.values(THEMES)
    .map(sourceForThemes)
    .join(''),
);

export const actions = `
<Layout>
  <Cell>
    <Notification show>
      <Notification.TextLabel>This notification has</Notification.TextLabel>
      <Notification.ActionButton type="textLink" onClick={() => console.log('Clicked!')}>
        text link action
      </Notification.ActionButton>
      <Notification.CloseButton />
    </Notification>
  </Cell>

  <Cell>
    <Notification show>
      <Notification.TextLabel>This notification has</Notification.TextLabel>
      <Notification.ActionButton onClick={() => console.log('Clicked!')}>
        button
      </Notification.ActionButton>
      <Notification.CloseButton />
    </Notification>
  </Cell>
</Layout>
`;

export const ellipsis = `
<Layout>
  <Cell>
      <Notification show>
        <Notification.TextLabel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Notification.TextLabel>
        <Notification.ActionButton onClick={() => console.log('Clicked!')}>
        button
        </Notification.ActionButton>
        <Notification.CloseButton />
      </Notification>
  </Cell>
  <Cell>
     <Notification show>
      <Notification.TextLabel ellipsis={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Notification.TextLabel>
      <Notification.ActionButton onClick={() => console.log('Clicked!')}>
      button
    </Notification.ActionButton>
      <Notification.CloseButton />
    </Notification>
  </Cell>
</Layout>
`;

export const controlled = `
() => {

const [show, setShow] = React.useState(false)

return <Layout>
    <Cell><Button onClick={() => setShow(!show)}>Show / Hide Notification</Button></Cell>
    <Cell>
    <Notification onClose={() => setShow(false)}  theme='error' show={show}>
    <Notification.TextLabel ellipsis={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </Notification.TextLabel>
    <Notification.ActionButton onClick={() => console.log('Clicked!')}>
      button
    </Notification.ActionButton>
    <Notification.CloseButton />
  </Notification>
  </Cell>
  <Cell><Text>text text text text text text text text text text text text text text text text text text text text text text</Text></Cell>
</Layout>
};
`;
