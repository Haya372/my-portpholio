import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { Icon, IconProps } from './base';

const GitHubIcon: Icon = (props: IconProps) => {
  return (
    <a className="m-1 hover:opacity-70" href={props.href}>
      <GrGithub color="black" />
    </a>
  );
};

export default GitHubIcon;
