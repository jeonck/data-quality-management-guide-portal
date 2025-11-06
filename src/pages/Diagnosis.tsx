import TabNavigation, { TabItem } from '../components/TabNavigation';
import AboutOverview from './AboutOverview';
import Readiness from './Readiness';
import Completeness from './Completeness';
import Consistency from './Consistency';
import Accuracy from './Accuracy';
import Security from './Security';
import Timeliness from './Timeliness';
import Usability from './Usability';

export default function About() {
  const tabs: TabItem[] = [
    {
      id: 'overview',
      label: '가이드 소개',
      icon: 'ℹ️',
      content: <AboutOverview />,
      accentColor: 'blue',
    },
    {
      id: 'readiness',
      label: '준비성',
      icon: '📝',
      content: <Readiness />,
      accentColor: 'blue',
    },
    {
      id: 'completeness',
      label: '완전성',
      icon: '✅',
      content: <Completeness />,
      accentColor: 'purple',
    },
    {
      id: 'consistency',
      label: '일관성',
      icon: '🔄',
      content: <Consistency />,
      accentColor: 'green',
    },
    {
      id: 'accuracy',
      label: '정확성',
      icon: '🎯',
      content: <Accuracy />,
      accentColor: 'orange',
    },
    {
      id: 'security',
      label: '보안성',
      icon: '🔒',
      content: <Security />,
      accentColor: 'blue',
    },
    {
      id: 'timeliness',
      label: '적시성',
      icon: '⏱️',
      content: <Timeliness />,
      accentColor: 'purple',
    },
    {
      id: 'usability',
      label: '유용성',
      icon: '💡',
      content: <Usability />,
      accentColor: 'green',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <TabNavigation tabs={tabs} defaultTab="overview" />
    </div>
  );
}
