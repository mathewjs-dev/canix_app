import React from 'react';
const CategorySummary = ({ totalWeights }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Total Weight by Category</h2>
      {Object.keys(totalWeights).length === 0 ? (
        <p className="text-gray-500">No weight data available.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-700">
          {Object.keys(totalWeights).map((category) => (
            <li key={category}>
              <span className="font-semibold">{category}</span>: {totalWeights[category]} kilograms
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CategorySummary;