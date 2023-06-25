import React from 'react';
import H1 from '../headline/h1';
import BaseDialog, { BaseDialogProps } from './base';

interface SkillDialogProps extends BaseDialogProps {
  icon: React.ReactElement;
  title: string;
  explanation: string;
  // TODO: 使えるフレームワーク一覧などを表示できるようにしたい
  relatedSkillIcons?: React.ReactElement[];
}

// TODO: ダイアログの中身をいい感じにする
const SkillDialog: React.FC<SkillDialogProps> = (props: SkillDialogProps) => {
  return (
    <BaseDialog show={props.show} hookClose={props.hookClose}>
      <div className="flex justify-center flex-row">
        <span className="text-8xl p-2 mx-auto mb-2">{props.icon}</span>
        <div className="text-left m-2">
          <H1 text={props.title} />
          <div className="mt-2">{props.explanation}</div>
        </div>
      </div>
    </BaseDialog>
  );
};

export default SkillDialog;
