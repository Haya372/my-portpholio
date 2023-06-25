import React from 'react';

export interface BaseContentProps {
  id: string;
  headline: string;
  children: React.ReactElement;
}

const BaseContent: React.FC<BaseContentProps> = (props: BaseContentProps) => {
  return (
    <div id={props.id} className="m-4 text-gray-700">
      <h1 className="text-xl font-semibold border-gray-600 border-l-8 border-b py-1 pl-2 pr-4 inline mb-2">
        {props.headline}
      </h1>
      {props.children}
    </div>
  );
};

export default BaseContent;
