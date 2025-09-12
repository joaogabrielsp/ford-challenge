import React from "react";
import type { Project, Screen } from "../types";

interface SidebarProps{
  currentProject: Project | null
  currentScreen: Screen
  onRegisterProject: () => void
  onGenerateTests: () => void
  onRunTests: () => void
} 
const Sidebar: React.FC<SidebarProps> = ({
  currentProject,
  currentScreen,
  onRegisterProject,
  onGenerateTests,
  onRunTests,
}) => {
  return (
    <div className="w-xs h-screen flex flex-col pt-5 bg-gray-900 font-roboto text-white">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl text-white font-bold">LegacyEvo</h1>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* Current Project */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-300 mb-2">
            Current Project
          </h3>
          {currentProject ? (
            <div>
              <p className="text-base font-medium mb-2">
                {currentProject.name}
              </p>
              <p className="text-xs">
                Created: {currentProject.createdAt.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p className="">No project selected</p>
          )}
        </div>
        
        {/* Buttons */}

        <div className="space-y-2">
          <button
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            onClick={onRegisterProject}
          >
            Register Project
          </button>

          <button
            onClick={onGenerateTests}
            disabled={!currentProject}
            className={`w-full py-2 px-4 rounded-lg transition-colors ${
              currentScreen === "generated-tests"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : currentProject
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            Generate Tests
          </button>

          <button
            onClick={onRunTests}
            disabled={!currentProject}
            className={`w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors ${
              currentScreen === "test-results"
                ? "bg-orange-600 text-white"
                : currentProject
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"             
            }`}
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
