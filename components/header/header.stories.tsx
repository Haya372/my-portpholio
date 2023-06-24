import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';
import GitHubIcon from '../icon/github';
import QiitaIcon from '../icon/qiita';

const meta: Meta<typeof Header> = {
  title: 'Component/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const NoChildren: Story = {
  args: {
    title: "Haya372's Portfolio!!",
    children: []
  },
};

export const WithIcons: Story = {
  args: {
    title: "Haya372's Portfolio!!",
    children: [
      <GitHubIcon key='github' href='https://github.com/Haya372' />,
      <QiitaIcon key='qiita' href='https://qiita.com/haya3' />,
    ]
  },
}