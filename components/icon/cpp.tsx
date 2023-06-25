import React from 'react';
import { TbBrandCpp } from 'react-icons/tb';
import { Icon, IconProps } from './base';

const CppIcon: Icon = (props: IconProps) => {
  return (
    <a className="hover:opacity-70" href={props.href}>
      <TbBrandCpp color="black" />
    </a>
  );
};

export default CppIcon;
