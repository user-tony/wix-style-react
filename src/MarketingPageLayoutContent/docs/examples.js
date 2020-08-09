export const basicExample = `
    <MarketingPageLayoutContent
      overline="overline"
      title="Marketing Page Title"
      subtitle="Subtitle text"
      content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
      actions={<Button size="large">Main Action</Button>}
    />
`;

export const sizesExample = `
    <Layout>
        <Cell>
          <MarketingPageLayoutContent
            size='medium'
            overline="overline"
            title="Marketing Page Title"
            subtitle="Subtitle text"
            content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
            actions={<Button size="large">Main Action</Button>}
          />
        </Cell>
        <Cell>
          <MarketingPageLayoutContent
            overline="overline"
            title="Marketing Page Title"
            subtitle="Subtitle text"
            content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
            actions={<Button size="large">Main Action</Button>}
          />
        </Cell>
    </Layout>
`;
