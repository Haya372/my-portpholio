import type { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from '../icon/github';
import QiitaIcon from '../icon/qiita';
import SideMenu from './side-menu';

const meta: Meta<typeof SideMenu> = {
  title: 'Component/SideMenu',
  component: SideMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Sample: Story = {
  args: {
    headlines: [
      {
        text: '見出し1',
      },
      {
        text: '見出し2',
      },
      {
        text: '見出し3',
      },
    ],
  },
};

export const SampleFocused: Story = {
  args: {
    headlines: [
      {
        text: '見出し1',
      },
      {
        text: '見出し2',
      },
      {
        text: '見出し3',
      },
    ],
    focusedIdx: 1,
  },
};
