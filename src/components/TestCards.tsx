import type React from "react";
import type { TestCase, Screen } from "../types";

interface TestCardsProps {
  tests: TestCase[];
  currentScreen: Screen;
  onRunSingleTest?: (testId: string) => void;
}

const TestCards: React.FC<TestCardsProps> = ({
  tests,
  currentScreen,
  onRunSingleTest,
}) => {
  const getStatusColor = (status: TestCase["status"]) => {
    switch (status) {
      case "pending":
        return "bg-gray-200 text-gray-800 border-gray-300";
      case "running":
        return "bg-blue-200 text-blue-800 border-blue-300";
      case "passed":
        return "bg-green-200 text-green-800 border-green-300";
      case "failed":
        return "bg-red-200 text-red-800 border-red-300";
      default:
        return "bg-gray-200 text-gray-800 border-gray-300";
    }
  }

  if (tests.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-medium mb-2">No tests available</h3>
          <p>
            {currentScreen === "generated-tests"
              ? 'Click "Generate Tests" to create test cases'
              : "Generate tests first to see results"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {currentScreen === "generated-tests" ? "Generated Tests" : "Test Results"}
        </h2>
        <p className="text-gray-600 mt-1">
          {currentScreen === "generated-tests"
            ? "Review the generated test cases before running"
            : "Results from test execution"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-gray-900 flex-1">{test.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(test.status)}`}>
              {test.status}
              </span>
            </div>

            <p className="text-sm text-gray-800 mb-4">{test.description}</p>

            {currentScreen === "test-results" && (
              <div className="space-y-3">
                {test.executionTime && (
                  <div className="text-xs text-gray-800">Execution time: {test.executionTime}ms</div>
                )}

                {test.status === "failed" && (
                  <div className="bg-red-50 border border-red-200 rounded p-2">
                    <p className="text-xs text-red-700 font-bold mb-1">Output Mismatch</p>
                    <div className="text-xs text-red-600">
                      <div className="mb-1">
                        <span className="font-medium">Legacy:</span> {test.legacyOutput}
                      </div>
                      <div>
                        <span className="font-medium">New:</span> {test.newOutput}
                      </div>
                    </div>
                  </div>
                )}

                {test.status === "passed" && (
                  <div className="bg-green-50 border border-green-200 rounded p-2">
                    <p className="font-bold text-xs text-green-700">Outputs match perfectly</p>
                  </div>
                )}
              </div>
            )}

            {currentScreen === "generated-tests" && onRunSingleTest && (
              <button
                onClick={() => onRunSingleTest(test.id)}
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded transition-colors"
              >
                Run This Test
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestCards