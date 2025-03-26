import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PortfolioTable from './components/PortfolioTable';
import UploadDocumentModal from './components/UploadDocumentModal';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Check screen size and collapse sidebar on mobile automatically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transform fixed md:static md:translate-x-0 z-30 h-full transition-transform duration-300 ease-in-out`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      {/* Sidebar Overlay - only on mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          setShowUploadModal={setShowUploadModal} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="flex-1 p-2 sm:p-3 md:p-5 overflow-hidden">
          {/* Toggle Sidebar Button - only visible on mobile */}
          <button 
            className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md md:hidden sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {activeTab === 'Portfolio' && (
            <PortfolioTable 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter}
            />
          )}
          {activeTab === 'Data Upload' && (
            <div className="flex items-center justify-center h-full">
              <button
                className="bg-primary px-6 py-3 rounded-md text-white font-medium"
                onClick={() => setShowUploadModal(true)}
              >
                Upload Document
              </button>
            </div>
          )}
          {activeTab !== 'Portfolio' && activeTab !== 'Data Upload' && (
            <div className="flex items-center justify-center h-full">
              <h2 className="text-2xl text-gray-500">{activeTab} page is under construction</h2>
            </div>
          )}
        </main>
      </div>
      
      {showUploadModal && (
        <UploadDocumentModal onClose={() => setShowUploadModal(false)} />
      )}
    </div>
  );
}

export default App; 