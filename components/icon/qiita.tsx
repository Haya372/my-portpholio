import React from 'react';
import { SiQiita } from 'react-icons/si';
import { Icon, IconProps } from './base';

const QiitaIcon: Icon = (props: IconProps) => {
  return (
    <a className="m-1 hover:opacity-70 text-grey-200" href={props.href}>
      <SiQiita />
    </a>
  );
};

export default QiitaIcon;
