import React from 'react';
const ProductList = ({ productsByCategory }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Products by Category</h2>
      {Object.keys(productsByCategory).length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        Object.keys(productsByCategory).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Category: {category}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Product ID
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Weight
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsByCategory[category].map((product, index) => (
                    <tr
                      key={product.id}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.product_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {product.weight} {product.unit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {new Date(product.date).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default ProductList;