import React, { useState } from 'react';
import SkillDialog from '../dialog/skill';

export interface SkillCardProps {
  // 表示するアイコン
  icon: React.ReactElement;
  // タイトル
  title: string;
  // 説明など
  explanation: string;
}

const SkillCard: React.FC<SkillCardProps> = (props: SkillCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDialog(false);
  };
  return (
    <>
      <div className="px-4 py-2 border rounded shadow inline-flex justify-items-center flex-col hover:opacity-70">
        <span onClick={openDialog} className="text-5xl p-0 mx-auto mb-2">
          {props.icon}
        </span>
      </div>
      <SkillDialog
        hookClose={closeDialog}
        title={props.title}
        explanation={props.explanation}
        show={showDialog}
        icon={props.icon}
      />
    </>
  );
};

export default SkillCard;
