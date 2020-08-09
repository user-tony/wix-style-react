export const basicExample = `
    <MarketingPageLayoutContent
      overline="overline"
      title="Marketing Page Title"
      subtitle="Subtitle text"
      content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
      action={<Button>Main Action</Button>}
    />
`;

export const sizesExample = `
    <Layout>
        <Cell>
          <MarketingPageLayout
            size='medium'
            overline="overline"
            title="Marketing Page Title"
            subtitle="Subtitle text"
            content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
            action={<Button>Main Action</Button>}
          />
        </Cell>
        <Cell>
          <MarketingPageLayout
            overline="overline"
            title="Marketing Page Title"
            subtitle="Subtitle text"
            content={<div><div>First Feature</div> <div>Second Feature</div>< div>Third Feature</div></div>}
            action={<Button>Main Action</Button>}
          />
        </Cell>
    </Layout>
`;
