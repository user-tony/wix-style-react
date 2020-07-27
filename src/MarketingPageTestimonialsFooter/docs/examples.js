export const basicExample = `
    <MarketingPageTestimonialsFooter
        testimonials={[
          {
            id: '0001',
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            id: '0002',
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            id: '0003',
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;

export const sizesExample = `
    class MyComponent extends React.Component {
      render() {
        const testimonialsArr = [
          {
            id: '0001',
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            id: '0002',
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            id: '0003',
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ];
        return (
          <Layout>
            <Cell>
              <MarketingPageTestimonialsFooter
                size='small'
                testimonials={testimonialsArr}
               />
            </Cell>
            <Cell>
              <MarketingPageTestimonialsFooter
                size='medium'
                testimonials={testimonialsArr}
               />
            </Cell>
            <Cell>
              <MarketingPageTestimonialsFooter
                size='large'
                testimonials={testimonialsArr}
               />
            </Cell>
          </Layout>
        );
      }
    }
`;
