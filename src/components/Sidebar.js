import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Dashboard', icon: '📊' },
    { id: 'Portfolio', icon: '📁' },
    { id: 'Notifications', icon: '🔔' },
    { id: 'Notices', icon: '📝' },
    { id: 'Auction', icon: '🔨' },
    { id: 'Data Upload', icon: '📤' },
    { id: 'Control Panel', icon: '⚙️' },
    { id: 'User Management', icon: '👥' },
    { id: 'Permissions', icon: '🔒' },
  ];

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-full">
      <div className="p-4 flex items-center border-b">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">R</div>
        <span className="ml-2 font-semibold text-lg">esollect</span>
      </div>
      
      <nav className="flex-1">
        <ul className="py-2">
          {menuItems.map((item) => (
            <li key={item.id} className="px-4 py-2">
              <motion.button
                className={`flex items-center w-full px-4 py-2 rounded-md transition-colors ${
                  activeTab === item.id
                    ? 'bg-sidebar-active text-white'
                    : 'text-gray-700 hover:bg-sidebar-hover'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.id}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="border-t p-4 text-center text-sm text-gray-500">
        Powered by Resollect
      </div>
    </div>
  );
};

export default Sidebar; 