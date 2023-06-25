import React from 'react';
import BaseContent from '../content/base';
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
          <BaseContent id="profile" headline="Profile">
            <p>
              ２年目エンジニアのHaya372です。主にバックエンドの開発をしています！
            </p>
          </BaseContent>
        </div>
      </div>
    </body>
  );
};

export default Home;
