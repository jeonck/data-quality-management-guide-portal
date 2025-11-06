import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ReadinessDetail from './pages/ReadinessDetail';
import CompletenessDetail from './pages/CompletenessDetail';
import ConsistencyDetail from './pages/ConsistencyDetail';
import AccuracyDetail from './pages/AccuracyDetail';
import SecurityDetail from './pages/SecurityDetail';
import TimelinessDetail from './pages/TimelinessDetail';
import UsabilityDetail from './pages/UsabilityDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/diagnosis/readiness" element={<ReadinessDetail />} />
            <Route path="/diagnosis/completeness" element={<CompletenessDetail />} />
            <Route path="/diagnosis/consistency" element={<ConsistencyDetail />} />
            <Route path="/diagnosis/accuracy" element={<AccuracyDetail />} />
            <Route path="/diagnosis/security" element={<SecurityDetail />} />
            <Route path="/diagnosis/timeliness" element={<TimelinessDetail />} />
            <Route path="/diagnosis/usability" element={<UsabilityDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-16">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold text-gray-800">데이터 품질관리 가이드 포털</p>
          <p className="text-sm text-gray-600">Built with React + Vite + TypeScript + Tailwind CSS</p>
        </div>
        <div className="text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default App;
