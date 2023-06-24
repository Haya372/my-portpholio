import React from 'react';

export interface Headline {
  text: string;
  // 見出しに対応するIDがあればページ内リンクにする
  id?: string;
}

export interface SideMenuItemProps {
  headline: Headline;
  focused: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = (
  props: SideMenuItemProps
) => {
  const className = props.focused
    ? 'font-extrabold text-xl text-blue-500 hover:opacity-70 sticky'
    : 'text-opacity-70 text-blue-500 hover:opacity-50 sticky';
  const href = props.headline.id ? `#${props.headline.id}` : undefined;
  return (
    <a className={className} href={href}>
      {props.headline.text}
    </a>
  );
};

interface SideMenuProps {
  // 見出し
  headlines: Headline[];
  // 現在見ている見出しのindex
  focusedIdx: number;
}

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  const menuItems: React.ReactElement[] = props.headlines.map(
    (headline, idx) => (
      <li
        key={idx}
        className="border-l-8 border-solid bg-blue-50 border-blue-300 my-1 p-1">
        <SideMenuItem headline={headline} focused={idx === props.focusedIdx} />
      </li>
    )
  );
  return <ul className="m-4">{menuItems}</ul>;
};

export default SideMenu;
