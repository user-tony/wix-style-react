export const basicExample = `
    <MarketingPageFeaturesFooter
      features={[
          {
            id: '0001',
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            id: '0003',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;

export const sizesExample = `
    class MyComponent extends React.Component {
      render() {
        const featuresArr = [
          {
            id: '0001',
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            id: '0003',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ];

        return (
          <Layout>
            <Cell>
              <MarketingPageFeaturesFooter
                size='small'
                features={featuresArr}
               />
            </Cell>
            <Cell>
              <MarketingPageFeaturesFooter
                size='medium'
                features={featuresArr}
               />
            </Cell>
            <Cell>
              <MarketingPageFeaturesFooter
                size='large'
                features={featuresArr}
               />
            </Cell>
          </Layout>
        );
      }
    }
`;
