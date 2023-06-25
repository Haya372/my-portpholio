import React from 'react';

export interface BaseDialogProps {
  // ダイアログを表示するかどうか
  show: boolean;
  children?: React.ReactElement;
  hookClose?: React.MouseEventHandler;
}

const BaseDialog: React.FC<BaseDialogProps> = (props: BaseDialogProps) => {
  if (!props.show) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black z-50 text-center py-auto"
      onClick={props.hookClose}>
      <div className="bg-white p-4 rounded shadow inline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700">
        {props.children}
      </div>
    </div>
  );
};

export default BaseDialog;
