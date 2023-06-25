import React from 'react';
import { BiLogoGoLang } from 'react-icons/bi';
import { Icon, IconProps } from './base';

const GolangIcon: Icon = (props: IconProps) => {
  return (
    <a className="hover:opacity-70 text-grey-200" href={props.href}>
      <BiLogoGoLang color="#007d9c" />
    </a>
  );
};

export default GolangIcon;
