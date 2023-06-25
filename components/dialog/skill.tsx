import React from 'react';
import { SkillCardProps } from '../card/skill-card';
import H1 from '../headline/h1';
import BaseDialog, { BaseDialogProps } from './base';

interface SkillDialogProps extends BaseDialogProps, SkillCardProps {
  // TODO: 使えるフレームワーク一覧などを表示できるようにしたい
  relatedSkillIcons?: React.ReactElement[];
}

// TODO: ダイアログの中身をいい感じにする
const SkillDialog: React.FC<SkillDialogProps> = (props: SkillDialogProps) => {
  const explanations: string[] =
    typeof props.explanation === 'string'
      ? [props.explanation]
      : props.explanation;

  return (
    <BaseDialog show={props.show} hookClose={props.hookClose}>
      <div className="flex justify-center flex-row">
        <span className="text-8xl p-2 mx-auto mb-2">{props.icon}</span>
        <div className="text-left mx-4">
          <H1 text={props.title} />
          <div className="mt-2">
            {explanations.map((explanation, idx) => (
              <p key={idx}>{explanation}</p>
            ))}
          </div>
        </div>
      </div>
    </BaseDialog>
  );
};

export default SkillDialog;
