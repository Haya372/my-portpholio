import React from 'react';
import H1 from '../headline/h1';

export interface BaseContentProps {
  id: string;
  headline: string;
  children: React.ReactElement;
}

const BaseContent: React.FC<BaseContentProps> = (props: BaseContentProps) => {
  return (
    <div id={props.id} className="m-4 text-gray-700">
      <H1 text={props.headline} />
      {props.children}
    </div>
  );
};

export default BaseContent;
