import React from 'react';
import BaseContent from './base';

interface TechContentProps {
  id: string;
  headline: string;
  children: React.ReactElement[];
  colSize?: number;
}

const TechContent: React.FC<TechContentProps> = (props: TechContentProps) => {
  const gridItems = props.children.map((child, idx) => (
    <div key={idx} className="mx-auto">
      {child}
    </div>
  ));
  return (
    <BaseContent id={props.id} headline={props.headline}>
      <div className="grid grid-cols-4 mt-2 gap-4">{gridItems}</div>
    </BaseContent>
  );
};

export default TechContent;
