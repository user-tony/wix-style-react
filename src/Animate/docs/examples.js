export const bounceExample = `() => {

    const [ play, setPlay ] = React.useState(false)


    return (
        <Layout>
            <Cell><Button onClick={() => setPlay(!play) }>Play</Button></Cell>
            <Cell>
                <Animate triggerAnimation={play} >
                    <FormField label="Field label">
                        <Input size="small" placeholder="Placeholder" />
                    </FormField>
                </Animate>
              </Cell>
            </Layout>
      )

}
`;
