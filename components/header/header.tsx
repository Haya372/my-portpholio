import React from 'react';

interface HeaderProps {
  // タイトル
  title: string;
  // 子要素 (ex: githubへのリンク)
  children: React.ReactElement[];
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="px-6 py-3 flex justify-between bg-blue-300 text-white text-2xl">
      <div className="font-bold">{props.title}</div>
      <div className="inline-flex justify-around">{props.children}</div>
    </header>
  );
};

export default Header;
