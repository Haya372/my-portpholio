import React from 'react';

export interface TextContentProps {
  id: string;
  headline: string;
  children: string;
}

const TextContent: React.FC<TextContentProps> = (props: TextContentProps) => {
  const lines = props.children.split(/\n/).map((line, idx) => (
    <p key={idx} className="my-1">
      {line}
      <br />
    </p>
  ));
  return (
    <div id={props.id} className="m-4 text-gray-700">
      <h1 className="text-xl font-semibold border-gray-600 border-l-8 border-b py-1 pl-2 pr-4 inline mb-2">
        {props.headline}
      </h1>
      {lines}
    </div>
  );
};

export default TextContent;
