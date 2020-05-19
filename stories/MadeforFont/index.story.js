import React from 'react';
import { Category } from '../storiesHierarchy';
import { header, description } from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import {
  Text,
  Heading,
  FontUpgrade,
  Box,
  Button,
  FormField,
  Input,
} from '../../src';

const ContentHelper = ({ title, content }) => (
  <Box marginBottom="24px" direction="vertical">
    <Box marginBottom="12px">
      <Heading appearance="H2">{title}</Heading>
    </Box>
    {content}
  </Box>
);

const B = ({ children }) => <Text weight="bold">{children}</Text>;

const QA = ({ q, a }) => (
  <Box direction="vertical" marginBottom="12px">
    <B>Q: {q}</B>
    <Text>A: {a}</Text>
  </Box>
);

export default {
  category: Category.GETTINGSTARTED,
  storyName: 'Madefor Font',

  sections: [
    header(),

    description({
      text: (
        <>
          <ContentHelper
            title="What is it"
            content={
              <Text>
                <B>Madefor</B> is the new Wix brand font and it is ready to be
                implemented in your project
              </Text>
            }
          />
          <ContentHelper
            title="How does it look like?"
            content={
              <Box direction="vertical">
                {['Helvetica', 'Madefor'].map((v, k) => (
                  <FontUpgrade active={v === 'Madefor'}>
                    <Box marginBottom="18px" key={k} verticalAlign="bottom">
                      <Box marginRight="18px">
                        <FormField label={v}>
                          <Input placeholder={v}></Input>
                        </FormField>
                      </Box>
                      <Button size="large">{v}</Button>
                    </Box>
                  </FontUpgrade>
                ))}
                <Text>
                  Explore more by clicking the{' '}
                  <Text weight="bold">Madefor Toggle</Text> in the storybook
                  toolbar and navigate through the{' '}
                  <LinkTo
                    kind={Category.CHEATSHEET}
                    story="Components Cheatsheet"
                  >
                    Cheatsheet
                  </LinkTo>{' '}
                  and any other component documentation page
                </Text>
              </Box>
            }
          />
          <ContentHelper
            title="How can I start using it?"
            content={
              <Text>
                In order to use the new font you will need to:
                <ul>
                  <li>
                    Include the Madefor font family css to your project's html
                    from the{' '}
                    <a
                      href="https://wix-fonts.now.sh/?path=/story/fonts--madefor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      wix-fonts cdn
                    </a>
                  </li>
                  <li>
                    Apply the{' '}
                    <Text>
                      <LinkTo
                        kind={Category.COMPONENTS}
                        story="FontUpgrade"
                      >{`<FontUpgrade/>`}</LinkTo>
                    </Text>{' '}
                    component on the root of your application
                  </li>
                  <li>
                    Review your design with your UX designer to make sure it
                    looks ok
                  </li>
                </ul>
              </Text>
            }
          />
          <ContentHelper
            title="FAQ"
            content={
              <div>
                <QA
                  q="I don't have an HTML file in my project, what should I do with the fonts?"
                  a={`If your application is rendered as a module in another host (e.g. Wix's Business Manager), then the font css should be added to the host only, and you should only apply the <FontUpgrade/> component yourself.`}
                ></QA>
                <QA
                  q="After the migration, some font weight looks bolder"
                  a={`That's because the Madefor font contains less weights than before. Previously there were "thin", "medium" and "bold" and from now on, only "medium" and "bold" ("thin" is merged with "medium"). Please go over the new styles with your UX.`}
                />
              </div>
            }
          />
        </>
      ),
    }),
  ],
};
