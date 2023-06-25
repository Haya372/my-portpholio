import SkillCard from '@components/card/skill-card';
import BaseContent from '@components/content/base';
import SkillContent from '@components/content/skill';
import Header from '@components/header/header';
import CppIcon from '@components/icon/cpp';
import GitHubIcon from '@components/icon/github';
import GolangIcon from '@components/icon/golang';
import JavaIcon from '@components/icon/java';
import QiitaIcon from '@components/icon/qiita';
import TypescriptIcon from '@components/icon/typescript';
import SideMenu from '@components/menu/side-menu';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Haya373's Portfolio!!">
        <GitHubIcon href="https://github.com/Haya372" />
        <QiitaIcon href="https://qiita.com/haya3" />
      </Header>
      <div className="min-w-screen bg-white flex-1">
        <div className="flex container mx-auto max-w-screen-lg">
          <div className="w-1/4">
            <SideMenu
              headlines={[
                { id: 'profile', text: 'Profile' },
                { id: 'skill', text: 'Skills' },
              ]}
              focusedIdx={0}
            />
          </div>
          <div>
            <BaseContent id="profile" headline="Profile">
              <div className="mt-2">
                ２年目エンジニアのHaya372です。主にバックエンドの開発をしています！
              </div>
            </BaseContent>
            <SkillContent id="skill" headline="Skills">
              <SkillCard
                icon={<JavaIcon />}
                title="Java"
                explanation={[
                  '業務で主に使用しています。',
                  'まだまだ極められていませんが、SpringBootはわかります。',
                ]}
              />
              <SkillCard
                icon={<CppIcon />}
                title="C++"
                explanation="大学時代の研究で使っていたり、AtCoderに参加する時に使います。"
              />
              <SkillCard
                icon={<TypescriptIcon />}
                title="TypeScript"
                explanation={[
                  '学生時代にインターンでJavaScriptを使っていたのですが、そこから独学で勉強しました。',
                  'フロントだとReact, Vue、バックエンドだとExpressあたりをよく使います。',
                ]}
              />
              <SkillCard
                icon={<GolangIcon />}
                title="Golang"
                explanation={[
                  'ミーハーなので、最近流行っていると聞いて勉強しました（笑）',
                  'Golangで開発する時はginをよく使います。',
                ]}
              />
            </SkillContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
