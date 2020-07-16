export const bounceExample = `() => {
    const [ trigger, setTrigger ] = React.useState(false)
    return (
        <Layout>
          <Cell span='8'>
            <Bounce
              triggerAnimation={trigger}
            >
              <FormField label="Field label">
                <Input size="small" placeholder="Placeholder" />
              </FormField>
            </Bounce>
          </Cell>
          <Cell><Button onClick={() => setTrigger(!trigger)}>Play</Button></Cell>
    </Layout>
   )
}
`;

export const onExitExample = `() => {
    const [ trigger, setTrigger ] = React.useState(false);
    const inputRef = React.useRef(null);

    return (
        <Layout>
          <Cell span='8'>
            <Bounce
              onExited={() => inputRef.current.focus()}
              triggerAnimation={trigger}
            >
              <Tooltip content="I am here" >
                 <Input ref={inputRef} size="small" placeholder="Placeholder" />
              </Tooltip>
            </Bounce>
          </Cell>
          <Cell><Button onClick={() => setTrigger(!trigger)}>Play</Button></Cell>
    </Layout>
   )
}
`;
