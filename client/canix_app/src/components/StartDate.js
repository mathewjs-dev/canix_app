import React from 'react';
const StartDate = ({ startDate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Weighing Process Start Date</h2>
      {startDate ? (
        <p className="text-gray-700">{new Date(startDate).toLocaleString()}</p>
      ) : (
        <p className="text-gray-500">Start date not available.</p>
      )}
    </div>
  );
};
export default StartDate;