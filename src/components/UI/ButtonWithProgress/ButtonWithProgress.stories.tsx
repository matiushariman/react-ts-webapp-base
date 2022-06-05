import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonWithProgress } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ButtonWithProgress',
  component: ButtonWithProgress,
} as ComponentMeta<typeof ButtonWithProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonWithProgress> = (args) => (
  <ButtonWithProgress {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
};
