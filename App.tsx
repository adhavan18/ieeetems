import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

import { CustomCursor, Navigation, AIChat } from './components';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Events = React.lazy(() => import('./pages/Events'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Team = React.lazy(() => import('./pages/Team'));
const Join = React.lazy(() => import('./pages/Join'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-500 font-mono text-sm">LOADING MODULE...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-background text-white min-h-screen selection:bg-gold selection:text-black relative">
        <CustomCursor />

        {/* Ambient Noise Background */}
        <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-noise bg-repeat"></div>
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-[2]"></div>

        <Navigation />

        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </Suspense>
        </main>

        <AIChat />

        <footer className="relative z-10 py-12 border-t border-white/5 mt-20 flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <motion.a
              href="https://www.linkedin.com/company/ieee-tems-srm/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              className="text-gray-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ieeetems_srm/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              className="text-gray-400 transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
          <p className="text-gray-500 text-xs font-mono tracking-widest text-center">
            © 2026 IEEE TEMS SRM STUDENT CHAPTER. <br />
            DESIGNED FOR THE FUTURE.
          </p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;