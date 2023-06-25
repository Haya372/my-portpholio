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
              <SkillCard
                icon={<JavaIcon />}
                title="java"
                explanation={[
                  '業務で主に使用しています。',
                  'まだまだ極められていませんが、SpringBootはわかります。',
                ]}
              />
              <SkillCard
                icon={<CppIcon />}
                title="c++"
                explanation="大学時代の研究で使っていたり、AtCoderに参加する時に使います。"
              />
              <SkillCard
                icon={<TypescriptIcon />}
                title="typescript"
                explanation={[
                  '学生時代にインターンでJavaScriptを使っていたのですが、そこから独学で勉強しました。',
                  'フロントだとReact, Vue、バックエンドだとExpressあたりをよく使います。',
                ]}
              />
              <SkillCard
                icon={<GolangIcon />}
                title="golang"
                explanation={[
                  'ミーハーなので、最近流行っていると聞いて勉強しました（笑）',
                  'Golangで開発する時はginをよく使います。',
                ]}
              />
            </SkillContent>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
