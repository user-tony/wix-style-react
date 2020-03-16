export const sizes = `
<Layout>
    <Cell>
        <Checkbox>Hello World!</Checkbox>
    </Cell>
    <Cell>
        <Checkbox size="small">Hello World!</Checkbox>
    </Cell>
</Layout>
`;

export const error = `
<Checkbox hasError errorMessage="Oops!" vAlign="top">
  <div>I have an error!</div>
  <div>Hover me...</div>
</Checkbox>
`;

export const selectionArea = `
<Layout>
    <Cell>
        <Checkbox selectionArea='always' checked>Check me!</Checkbox>
    </Cell>
    <Cell>
        <Checkbox selectionArea='always'>Check me!</Checkbox>
    </Cell>
    <Cell>
      <Checkbox selectionArea='always' disabled>Check me!</Checkbox>
    </Cell>
    <Cell>
      <Checkbox selectionArea='hover'>Check me!</Checkbox>
    </Cell>
</Layout>
`;

export const controlledCheckbox = `
() => {
  const [checked , setChecked ] = React.useState(false);

  return <Checkbox checked={checked} onChange={() => setChecked(!checked)}>Hello World!</Checkbox>
}
`;
