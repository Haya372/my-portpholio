import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { Icon, IconProps } from './base';

const TypescriptIcon: Icon = (props: IconProps) => {
  return (
    <a className="hover:opacity-70" href={props.href}>
      <BiLogoTypescript color="#3178c6" />
    </a>
  );
};

export default TypescriptIcon;
