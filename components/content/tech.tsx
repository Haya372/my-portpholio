import React from 'react';

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
    <div className="m-4 text-gray-700">
      <h1 className="text-xl font-semibold border-gray-600 border-l-8 border-b py-1 pl-2 pr-4 inline mb-2">
        {props.headline}
      </h1>
      <div className="grid grid-cols-4 mt-2 gap-4">{gridItems}</div>
    </div>
  );
};

export default TechContent;
