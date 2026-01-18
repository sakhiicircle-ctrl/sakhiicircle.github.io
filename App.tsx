
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Tracker } from './pages/Tracker';

// Mock components for other pages
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="py-40 px-6 text-center">
    <h1 className="text-5xl font-bold mb-4">{title}</h1>
    <p className="text-gray-500">Coming soon to the SakhiiCircle platform.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/about" element={<Placeholder title="About SakhiiCircle" />} />
          <Route path="/community" element={<Placeholder title="Anonymous Community" />} />
          <Route path="/experts" element={<Placeholder title="Expert Network" />} />
          <Route path="/pricing" element={<Placeholder title="Our Plans" />} />
          <Route path="/resources" element={<Placeholder title="Educational Resources" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
