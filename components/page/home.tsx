import React from 'react';
import TextContent from '../content/text';
import Header from '../header/header';
import GitHubIcon from '../icon/github';
import QiitaIcon from '../icon/qiita';
import SideMenu from '../menu/side-menu';

const Home: React.FC = () => {
  return (
    <body className="min-h-screen">
      <Header title="Haya373's Portfolio!!">
        <GitHubIcon href="https://github.com/Haya372" />
        <QiitaIcon href="https://qiita.com/haya3" />
      </Header>
      <div className="flex bg-white">
        <div className="w-1/4">
          <SideMenu
            headlines={[{ id: 'profile', text: 'Profile' }]}
            focusedIdx={0}
          />
        </div>
        <div className="flex-1">
          <TextContent id="profile" headline="Profile">
            ２年目エンジニアのHaya372です。主にバックエンドの開発をしています！
          </TextContent>
        </div>
      </div>
    </body>
  );
};

export default Home;