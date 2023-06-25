import type { Meta, StoryObj } from '@storybook/react';
import IconCard from '../card/icon-card';
import GitHubIcon from '../icon/github';
import TechContent from './tech';

const meta: Meta<typeof TechContent> = {
  title: 'Component/TechContent',
  component: TechContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TechContent>;

export const SampleTech: Story = {
  args: {
    id: 'sample-tech',
    headline: '見出し',
    children: [
      <IconCard
        key="0"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="1"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="2"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
    ],
  },
};

export const SampleMultiLineTexh: Story = {
  args: {
    id: 'sample-multi-line-tech',
    headline: '見出し',
    children: [
      <IconCard
        key="0"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="1"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="2"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="3"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="4"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="5"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="6"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="7"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <IconCard
        key="8"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
    ],
  },
};
