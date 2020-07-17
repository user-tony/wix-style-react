export const bounceExample = `() => {
    const [ trigger, setTrigger ] = React.useState(false);
    return (
        <Layout>
          <Cell span='8'>
            <Bounce triggerAnimation={trigger}>
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

export const onExitedExample = `() => {
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

export const loopExample = `() => {
    const [ trigger, setTrigger ] = React.useState(false);
    const [ loop, setLoop ] = React.useState(false);

    const onPlayClick = () => {
        setTrigger(!trigger);
        setLoop(true);
    };

    return (
        <Layout>
          <Cell span='8'>
            <Bounce loop={loop} triggerAnimation={trigger}>
              <FormField label="Field label">
                <Input size="small" placeholder="Placeholder" />
              </FormField>
            </Bounce>
          </Cell>
          <Cell>
             <Button onClick={onPlayClick}>{trigger ? 'Stop' : 'Play'}</Button>
         </Cell>
        </Layout>
   )
}
`;

export const delayExample = `() => {
    const [ trigger1, setTrigger1 ] = React.useState(false);
    const [ trigger2, setTrigger2 ] = React.useState(false);

    return (
    <Layout>
      <Cell>
        <Layout>
          <Cell span='8'>
            <Bounce triggerAnimation={trigger1}>
                <Input size="small" placeholder="Placeholder" />
            </Bounce>
          </Cell>
          <Cell span="4"><Button onClick={() => setTrigger1(!trigger1)}>Play</Button></Cell>
        </Layout>
      </Cell>
      <Cell>
        <Layout>
          <Cell span='8'>
            <Bounce delay triggerAnimation={trigger2}>
                <Input size="small" placeholder="Placeholder" />
            </Bounce>
          </Cell>
          <Cell span="4"><Button onClick={() => setTrigger2(!trigger2)}>Play</Button></Cell>
        </Layout>
      </Cell>
    </Layout>
   )
}
`;
