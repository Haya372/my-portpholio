import React from "react";
import { GrGithub } from 'react-icons/gr';
import { Icon, IconProps } from "./base";

const GitHubIcon: Icon = (props: IconProps) => {
  return (
    <div className="m-1">
      <GrGithub href={props.href} color="black"/>
    </div>
  );
}

export default GitHubIcon;