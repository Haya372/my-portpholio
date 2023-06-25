import React from 'react';
import IconCard from '../card/icon-card';
import BaseContent from '../content/base';
import TechContent from '../content/tech';
import Header from '../header/header';
import CppIcon from '../icon/cpp';
import GitHubIcon from '../icon/github';
import GolangIcon from '../icon/golang';
import JavaIcon from '../icon/java';
import QiitaIcon from '../icon/qiita';
import TypescriptIcon from '../icon/typescript';
import SideMenu from '../menu/side-menu';

const Home: React.FC = () => {
  return (
    <body className="min-h-screen">
      <Header title="Haya373's Portfolio!!">
        <GitHubIcon href="https://github.com/Haya372" />
        <QiitaIcon href="https://qiita.com/haya3" />
      </Header>
      <div className="min-w-screen bg-white">
        <div className="flex container mx-auto">
          <div className="w-1/4">
            <SideMenu
              headlines={[
                { id: 'profile', text: 'Profile' },
                { id: 'skill', text: 'Skills' },
              ]}
              focusedIdx={0}
            />
          </div>
          <div className="flex-1">
            <BaseContent id="profile" headline="Profile">
              <div className="mt-2">
                ２年目エンジニアのHaya372です。主にバックエンドの開発をしています！
              </div>
            </BaseContent>
            <TechContent id="skill" headline="Skills">
              <IconCard icon={<JavaIcon />} title="java" explanation="java" />
              <IconCard icon={<CppIcon />} title="c++" explanation="c++" />
              <IconCard
                icon={<TypescriptIcon />}
                title="typescript"
                explanation="typescript"
              />
              <IconCard
                icon={<GolangIcon />}
                title="golang"
                explanation="golang"
              />
            </TechContent>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
