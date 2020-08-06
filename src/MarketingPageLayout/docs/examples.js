export const basicExample = `
    <MarketingPageLayout
      overline="overline"
      header="Marketing Page Title"
      subtitle="Subtitle text"
      content={['First Feature', 'Second Feature', 'Third Feature']}
      contentPrefixIcon={<Icons.Check />}
      action={<Button>Main Action</Button>}
      image={<Image />}
    />
`;

export const sizesExample = `
    <Layout>
        <Cell>
          <MarketingPageLayout
            size='medium'
            content={<div>content</div>}
            image={<Image />}
          />
        </Cell>
        <Cell>
          <MarketingPageLayout
            content={<div>content</div>}
            image={<Image />}
          />
        </Cell>
    </Layout>
`;

export const featuresFooterExample = `
    <MarketingPageLayout
      content={<div>content</div>}
      image={<Image />}
      // footer={<MarketingPageFeaturesFooter
      //     features={[
      //       {
      //         id: '0001',
      //         image: <Image width={60} height={60} />,
      //         title: 'Remove Wix Ads',
      //         text: "Enjoy a website that's completely your own brand by removing Wix ads.",
      //       },
      //       {
      //         id: '0002',
      //         image: <Image width={60} height={60} />,
      //         title: 'Connect a Custom Domain',
      //         text: "Get your business found with a custom domain.",
      //       },
      //       {
      //         id: '0003',
      //         image: <Image width={60} height={60} />,
      //         title: 'Accept Online Payment',
      //         text: "Let your customers and clients pay you online at checkout.",
      //       },
      //     ]}
      //   />}
    />
`;

export const testimonialsFooterExample = `
    <MarketingPageLayout
      content={<div>content</div>}
      image={<Image />}
      // footer={<MarketingPageTestimonialsFooter
      //     testimonials={[
      //       {
      //         id: '0001',
      //         avatar: <Avatar name="Guy in glasses" size="size60"/>,
      //         text: 'I love it! This product is exactly what I needed.',
      //         authorName: 'Guy in glasses'
      //       },
      //       {
      //         id: '0002',
      //         avatar: <Avatar name="Person with a hat" size="size60"/>,
      //         text: 'Amazing! It helped me to solve my problems.',
      //         authorName: 'Person with a hat'
      //       },
      //       {
      //         id: '0003',
      //         avatar: <Avatar name="Smiling lady" size="size60"/>,
      //         text: 'A perfect tool for my every day tasks.',
      //         authorName: 'Smiling lady'
      //       },
      //     ]}
      //   />}
    />
`;
