import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UploadDocumentModal = ({ onClose }) => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [remarks, setRemarks] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      // Reset error when a new file is selected
      setError('');
      
      // Get file extension
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      
      // Validate file type against selected document type
      if (documentType && !isFileTypeValid(fileExtension, documentType)) {
        setError(`This file type doesn't match the selected document type "${documentType}".`);
      }
      
      setFile(selectedFile);
    }
  };
  
  const isFileTypeValid = (extension, docType) => {
    switch (docType) {
      case 'PDF':
        return extension === 'pdf';
      case 'Image':
        return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension);
      case 'Text Document':
        return ['txt', 'doc', 'docx', 'rtf'].includes(extension);
      case 'Spreadsheet':
        return ['xls', 'xlsx', 'csv'].includes(extension);
      default:
        return true; // If no document type is selected, don't validate
    }
  };
  
  const handleDocumentTypeChange = (e) => {
    const newDocType = e.target.value;
    setDocumentType(newDocType);
    
    // Re-validate existing file when document type changes
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (newDocType && !isFileTypeValid(fileExtension, newDocType)) {
        setError(`Your selected file doesn't match the document type "${newDocType}".`);
      } else {
        setError('');
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there's an error before submission
    if (error) {
      return; // Prevent submission if there's an error
    }
    
    // Additional validation before submission
    if (documentType && file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (!isFileTypeValid(fileExtension, documentType)) {
        setError(`This file type doesn't match the selected document type "${documentType}".`);
        return;
      }
    }
    
    // Handle document upload logic here
    alert('Document uploaded successfully!');
    onClose();
  };
  
  const documentNames = [
    'Bank Statement',
    'Income Certificate',
    'Property Documents',
    'Identity Proof',
    'Address Proof',
  ];
  
  const documentTypes = [
    'PDF',
    'Image',
    'Text Document',
    'Spreadsheet',
  ];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-50">
      <motion.div 
        className="bg-white w-full max-w-md h-full shadow-lg"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">Upload Document</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Name
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  {documentNames.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Type
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  value={documentType}
                  onChange={handleDocumentTypeChange}
                  required
                >
                  <option value="">Select</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {documentType && (
                <p className="mt-1 text-xs text-gray-500">
                  {documentType === 'PDF' && 'Accepts: PDF files (.pdf)'}
                  {documentType === 'Image' && 'Accepts: Image files (.jpg, .jpeg, .png, .gif, .webp)'}
                  {documentType === 'Text Document' && 'Accepts: Text files (.txt, .doc, .docx, .rtf)'}
                  {documentType === 'Spreadsheet' && 'Accepts: Spreadsheet files (.xls, .xlsx, .csv)'}
                </p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Remarks
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select File
              </label>
              <div className="mt-1 flex flex-col">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-sm border border-gray-300 cursor-pointer hover:bg-gray-50">
                  <span className="mb-2 text-base leading-normal">Choose file</span>
                  <span className="text-xs text-gray-500">
                    {file ? file.name : 'No file chosen'}
                  </span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    required
                  />
                </label>
                {error && (
                  <div className="mt-2 text-red-500 text-sm">
                    <svg className="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                  </div>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full py-2 rounded-md transition-colors ${
                error
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary-hover text-white'
              }`}
              disabled={!!error}
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UploadDocumentModal; 