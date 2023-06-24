import React from 'react';

export interface IconProps {
  // アイコンのリンク先
  href?: string;
}

export type Icon = React.FC<IconProps>;
