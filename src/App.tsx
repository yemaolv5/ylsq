/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, Grid, Users, User, Camera } from 'lucide-react';
import Home from './components/Home';
import Service from './components/Service';
import Neighborhood from './components/Neighborhood';
import Profile from './components/Profile';
import SnapReport from './components/SnapReport';

type Tab = 'home' | 'service' | 'neighbor' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isSnapReportOpen, setIsSnapReportOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onOpenSnapReport={() => setIsSnapReportOpen(true)} />;
      case 'service':
        return <Service />;
      case 'neighbor':
        return <Neighborhood />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { id: 'home', label: '首页', icon: HomeIcon },
    { id: 'service', label: '服务', icon: Grid },
    { id: 'neighbor', label: '邻里', icon: Users },
    { id: 'profile', label: '我的', icon: User },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 overflow-hidden font-sans shadow-xl relative">
      <div className="flex-1 relative scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-y-auto pb-20 scrollbar-hide"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2 z-50">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => setActiveTab(item.id as Tab)}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <div
                className={`transition-all duration-300 flex flex-col items-center ${
                  isActive ? 'text-[#FF8C00]' : 'text-gray-400'
                }`}
              >
                <Icon size={22} className={isActive ? 'scale-110' : 'scale-100'} />
                <span className="text-[10px] mt-1 font-medium">{item.label}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="nav-active-dot"
                  className="absolute top-1 w-1 h-1 bg-[#FF8C00] rounded-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* FAB for Snap & Report - Home specific (visible across but persistent as requested) */}
      {activeTab === 'home' && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsSnapReportOpen(true)}
          className="absolute bottom-20 right-4 w-12 h-12 bg-[#FF8C00] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-40"
          id="fab-report"
          title="随手拍上报"
        >
          <Camera size={24} />
        </motion.button>
      )}

      {/* Snap & Report Modal */}
      <AnimatePresence>
        {isSnapReportOpen && (
          <SnapReport onClose={() => setIsSnapReportOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
