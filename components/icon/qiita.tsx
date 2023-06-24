import React from "react";
import { SiQiita } from 'react-icons/si';
import { Icon, IconProps } from "./base";

const QiitaIcon: Icon = (props: IconProps) => {
  return (
    <div className="m-1">
      <SiQiita href={props.href} />
    </div>
  );
}

export default QiitaIcon;