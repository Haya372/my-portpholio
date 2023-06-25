import React from 'react';
import { BsFiletypeJava } from 'react-icons/bs';
import { Icon, IconProps } from './base';

const JavaIcon: Icon = (props: IconProps) => {
  return (
    <a className="hover:opacity-70" href={props.href}>
      <BsFiletypeJava color="black" />
    </a>
  );
};

export default JavaIcon;
