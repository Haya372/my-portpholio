import type { Meta, StoryObj } from '@storybook/react';
import H1 from './h1';

const meta: Meta<typeof H1> = {
  title: 'Component/H1',
  component: H1,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof H1>;

export const SampleH1: Story = {
  args: {
    text: 'テスト用見出し',
  },
};
