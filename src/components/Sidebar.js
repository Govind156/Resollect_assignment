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

  const handleItemClick = (id) => {
    setActiveTab(id);
    // On mobile, if we have a toggleSidebar prop, call it to close sidebar after selection
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Find the parent App component's toggleSidebar from the DOM
      const sidebarToggle = document.querySelector('.sidebar-toggle');
      if (sidebarToggle) {
        sidebarToggle.click();
      }
    }
  };

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-full">
      <div className="p-4 flex items-center border-b">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">R</div>
        <span className="ml-2 font-semibold text-lg">esollect</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
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
                onClick={() => handleItemClick(item.id)}
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