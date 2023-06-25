import React from 'react';

export interface HeadlineProps {
  text: string;
}

const H1: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  return (
    <h1 className="text-xl font-semibold border-gray-600 border-l-8 border-b py-1 pl-2 pr-4 inline">
      {props.text}
    </h1>
  );
};

export default H1;
