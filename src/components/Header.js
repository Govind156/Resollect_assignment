import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ setShowUploadModal }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-end px-6">
      <div className="relative">
        <button 
          className="flex items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
            G
          </div>
          <div className="ml-3 text-sm">
            <div>Govind</div>
            <div className="text-gray-500 text-xs">govind@gmail.com</div>
          </div>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform ${showDropdown ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <AnimatePresence>
          {showDropdown && (
            <motion.div 
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 