
import React, { useState, useEffect } from 'react';
import axios from './api/axiosConfig';
import FileUpload from './components/FileUpload';
import ProductList from './components/ProductList';
import CategorySummary from './components/CategorySummary';
import StartDate from './components/StartDate';
const App = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [totalWeights, setTotalWeights] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [refreshData, setRefreshData] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get('/products');
      const data = response.data;
      setProductsByCategory(data.products_by_category);
      setTotalWeights(data.total_weights);
      setStartDate(data.start_date);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data from the server.');
    }
  };
  useEffect(() => {
    fetchData();
  }, [refreshData]);
  const handleUploadSuccess = () => {
    setRefreshData((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Canix Product Importer
          </h1>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <StartDate startDate={startDate} />
          <CategorySummary totalWeights={totalWeights} />
        </div>
        <ProductList productsByCategory={productsByCategory} />
      </main>
      <footer className="bg-white mt-8 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Canix
        </div>
      </footer>
    </div>
  );
};
export default App;