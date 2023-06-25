import React from 'react';
import SkillCard from '../card/skill-card';
import BaseContent from '../content/base';
import SkillContent from '../content/skill';
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
            <SkillContent id="skill" headline="Skills">
              <SkillCard icon={<JavaIcon />} title="java" explanation="java" />
              <SkillCard icon={<CppIcon />} title="c++" explanation="c++" />
              <SkillCard
                icon={<TypescriptIcon />}
                title="typescript"
                explanation="typescript"
              />
              <SkillCard
                icon={<GolangIcon />}
                title="golang"
                explanation="golang"
              />
            </SkillContent>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
