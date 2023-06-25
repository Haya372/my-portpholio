import type { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from '../icon/github';
import SkillDialog from './skill';

const meta: Meta<typeof SkillDialog> = {
  title: 'Component/SkillDialog',
  component: SkillDialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SkillDialog>;

export const SampleSkill: Story = {
  args: {
    show: true,
    icon: <GitHubIcon />,
    title: 'github',
    explanation: 'テスト用です',
  },
};

export const SampleSkillMultiLine: Story = {
  args: {
    show: true,
    icon: <GitHubIcon />,
    title: 'github',
    explanation: ['１行目', '２行目', '３行目', '４行目', '５行目'],
  },
};

export const SampleSkillHidden: Story = {
  args: {
    show: false,
    icon: <GitHubIcon />,
    title: 'github',
    explanation: 'テスト用です',
  },
};
