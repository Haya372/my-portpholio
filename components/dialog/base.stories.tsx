import type { Meta, StoryObj } from '@storybook/react';
import BaseDialog from './base';

const meta: Meta<typeof BaseDialog> = {
  title: 'Component/BaseDialog',
  component: BaseDialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof BaseDialog>;

export const SampleBase: Story = {
  args: {
    show: true,
    children: <div className="text-black">テスト用の文字列</div>,
  },
};
