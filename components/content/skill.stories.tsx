import type { Meta, StoryObj } from '@storybook/react';
import SkillCard from '../card/skill-card';
import GitHubIcon from '../icon/github';
import SkillContent from './skill';

const meta: Meta<typeof SkillContent> = {
  title: 'Component/SkillContent',
  component: SkillContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SkillContent>;

export const SampleSkill: Story = {
  args: {
    id: 'sample-Skill',
    headline: '見出し',
    children: [
      <SkillCard
        key="0"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="1"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
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
    id: 'sample-multi-line-Skill',
    headline: '見出し',
    children: [
      <SkillCard
        key="0"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="1"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="2"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="3"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="4"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="5"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="6"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="7"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
      <SkillCard
        key="8"
        icon={<GitHubIcon />}
        title="github"
        explanation="説明"
      />,
    ],
  },
};
