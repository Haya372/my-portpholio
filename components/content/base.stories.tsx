import type { Meta, StoryObj } from '@storybook/react';
import BaseContent from './base';

const meta: Meta<typeof BaseContent> = {
  title: 'Component/BaseContent',
  component: BaseContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof BaseContent>;

export const SampleText: Story = {
  args: {
    id: 'sample-text',
    headline: '見出し',
    children: <>テスト用の文字列</>,
  },
};

export const SampleMultiLineText: Story = {
  args: {
    id: 'sample-multi-line-text',
    headline: '見出し',
    children: (
      <>
        <p>こんにちは。こんにちは。</p>
        <p>これはテスト用の文字列です。</p>
        <p>複数行を表示するとどうなるかをテストしています。</p>
      </>
    ),
  },
};
