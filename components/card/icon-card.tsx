import React from 'react';

export interface IconCardProps {
  // 表示するアイコン
  icon: React.ReactElement;
  // タイトル
  title: string;
  // 説明など
  explanation: string;
}

// TODO: クリックしてダイアログが表示されるようにしたいなあ
const IconCard: React.FC<IconCardProps> = (props: IconCardProps) => {
  return (
    <div className="px-4 py-2 border rounded shadow inline-flex justify-items-center flex-col hover:opacity-70">
      <span className="text-5xl p-0 mx-auto mb-2">{props.icon}</span>
      <div className="text-gray-700 text-xs font-bold text-center">
        {props.title}
      </div>
    </div>
  );
};

export default IconCard;
