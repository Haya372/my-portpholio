import type { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from '../icon/github';
import QiitaIcon from '../icon/qiita';
import IconCard from './icon-card';

const meta: Meta<typeof IconCard> = {
  title: 'Component/IconCard',
  component: IconCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof IconCard>;

export const TestGithub: Story = {
  args: {
    icon: <GitHubIcon />,
    title: 'github',
    explanation: 'テスト用です',
  },
};
