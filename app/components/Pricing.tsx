import React from 'react';

const WorkspacePricing = () => {
  return (
    <div className="text-center mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Workspace Pricing</h2>
      <p className="text-lg mb-8">Choose the plan that suits you best</p>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs w-full sm:w-1/3 p-6 mb-8">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Hourly Plan</h3>
            <p className="text-lg mb-4">Get access to our workspace for an hour at an affordable price.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe Hourly</button>
          </div>
        </div>
        <div className="max-w-xs w-full sm:w-1/3 p-6 mb-8">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Daily Plan</h3>
            <p className="text-lg mb-4">Enjoy a full day of workspace usage with our daily plan.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe Daily</button>
          </div>
        </div>
        <div className="max-w-xs w-full sm:w-1/3 p-6 mb-8">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Weekly Plan</h3>
            <p className="text-lg mb-4">Maximize your productivity with unlimited weekly access.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe Weekly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePricing;
