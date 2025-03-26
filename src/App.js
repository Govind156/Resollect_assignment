import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PortfolioTable from './components/PortfolioTable';
import UploadDocumentModal from './components/UploadDocumentModal';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Portfolio');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setShowUploadModal={setShowUploadModal} />
        <main className="flex-1 p-5 overflow-hidden">
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