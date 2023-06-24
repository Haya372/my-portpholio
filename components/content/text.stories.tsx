import type { Meta, StoryObj } from '@storybook/react';
import TextContent from './text';

const meta: Meta<typeof TextContent> = {
  title: 'Component/TextContent',
  component: TextContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TextContent>;

export const SampleText: Story = {
  args: {
    id: 'sample-text',
    headline: '見出し',
    children: '見出し用の要素です',
  },
};

export const SampleMultiLineText: Story = {
  args: {
    id: 'sample-multi-line-text',
    headline: '見出し',
    children: `こんにちは。
    これはテスト用の文字列です。
    複数行を表示するとどうなるかをテストしています。`,
  },
};
