import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-xs h-screen flex flex-col pt-5 bg-gray-900 font-roboto text-white">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl text-white font-bold">LegacyEvo</h1>
      </div>

      <div className="flex-1 p-4 space-y-4">

        <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Current Project</h3>
            <p className="text-base font-medium mb-2">E-commerce Legacy Migration</p>
            <p className="text-xs">Created: 14/01/2024</p>
        </div>

        <div className="space-y-2">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Register Project
          </button>

          <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 rounded-lg">
            Generate Tests
          </button>

          <button className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-lg">
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
