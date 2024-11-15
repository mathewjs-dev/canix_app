import React, { useState } from 'react';
import axios from '../api/axiosConfig';
const FileUpload = ({ onUploadSuccess }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      alert('Please select at least one file.');
      return;
    }
    setUploading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files[]', file);
    });
    try {
      const response = await axios.post('/products/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message || 'Files uploaded successfully.');
      setFiles([]);
      onUploadSuccess(); // Notify parent component to refresh data
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('An error occurred while uploading files.');
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload CSV Files</h2>
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <input
            type="file"
            multiple
            accept=".csv"
            onChange={handleFileChange}
            disabled={uploading}
            className="block w-full text-gray-700"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${
            uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload Files'}
        </button>
      </form>
    </div>
  );
};
 export default FileUpload;