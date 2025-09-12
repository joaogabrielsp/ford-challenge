import { useState } from "react";
import Sidebar from "./components/Sidebar";
import type { Project, Screen, TestCase } from "./types";

// Mock project
const mockProject: Project = {
  id: "1",
  name: "E-commerce Legacy Migration",
  legacyPath: "/legacy/ecommerce",
  newPath: "/new/ecommerce",
  createdAt: new Date("2024-01-15"),
}

const mockGeneratedTests: TestCase[] = [
  {
    id: "1",
    name: "User Authentication Test",
    description: "Validates user login functionality between legacy and new systems",
    status: "pending",
  },
  {
    id: "2",
    name: "Product Catalog API Test",
    description: "Compares product listing responses from both systems",
    status: "pending",
  },
  {
    id: "3",
    name: "Shopping Cart Operations",
    description: "Tests add/remove/update cart functionality",
    status: "pending",
  },
  {
    id: "4",
    name: "Payment Processing Test",
    description: "Validates payment flow consistency",
    status: "pending",
  },
  {
    id: "5",
    name: "Order History Retrieval",
    description: "Compares order history data between systems",
    status: "pending",
  },
  {
    id: "6",
    name: "Search Functionality Test",
    description: "Tests product search results consistency",
    status: "pending",
  },
]

const mockTestResults: TestCase[] = [
  {
    id: "1",
    name: "User Authentication Test",
    description: "Validates user login functionality between legacy and new systems",
    status: "passed",
    legacyOutput: '{"success": true, "token": "abc123"}',
    newOutput: '{"success": true, "token": "abc123"}',
    executionTime: 245,
  },
  {
    id: "2",
    name: "Product Catalog API Test",
    description: "Compares product listing responses from both systems",
    status: "failed",
    legacyOutput: '{"products": [{"id": 1, "price": 29.99}]}',
    newOutput: '{"products": [{"id": 1, "price": 30.00}]}',
    executionTime: 156,
  },
  {
    id: "3",
    name: "Shopping Cart Operations",
    description: "Tests add/remove/update cart functionality",
    status: "passed",
    legacyOutput: '{"cart_total": 59.98, "items": 2}',
    newOutput: '{"cart_total": 59.98, "items": 2}',
    executionTime: 189,
  },
  {
    id: "4",
    name: "Payment Processing Test",
    description: "Validates payment flow consistency",
    status: "passed",
    legacyOutput: '{"status": "completed", "amount": 99.99}',
    newOutput: '{"status": "completed", "amount": 99.99}',
    executionTime: 312,
  },
  {
    id: "5",
    name: "Order History Retrieval",
    description: "Compares order history data between systems",
    status: "failed",
    legacyOutput: '{"orders": 25, "total_value": 1250.00}',
    newOutput: '{"orders": 25, "total_value": 1249.99}',
    executionTime: 178,
  },
  {
    id: "6",
    name: "Search Functionality Test",
    description: "Tests product search results consistency",
    status: "passed",
    legacyOutput: '{"results": 15, "query": "laptop"}',
    newOutput: '{"results": 15, "query": "laptop"}',
    executionTime: 98,
  },
]

const singleTestResults: Record<
  string,
  { status: "passed" | "failed"; executionTime: number; legacyOutput?: string; newOutput?: string }
> = {
  "1": {
    status: "passed",
    executionTime: 245,
    legacyOutput: '{"success": true, "token": "abc123"}',
    newOutput: '{"success": true, "token": "abc123"}',
  },
  "2": {
    status: "failed",
    executionTime: 156,
    legacyOutput: '{"products": [{"id": 1, "price": 29.99}]}',
    newOutput: '{"products": [{"id": 1, "price": 30.00}]}',
  },
  "3": {
    status: "passed",
    executionTime: 189,
    legacyOutput: '{"cart_total": 59.98, "items": 2}',
    newOutput: '{"cart_total": 59.98, "items": 2}',
  },
  "4": {
    status: "passed",
    executionTime: 312,
    legacyOutput: '{"status": "completed", "amount": 99.99}',
    newOutput: '{"status": "completed", "amount": 99.99}',
  },
  "5": {
    status: "failed",
    executionTime: 178,
    legacyOutput: '{"orders": 25, "total_value": 1250.00}',
    newOutput: '{"orders": 25, "total_value": 1249.99}',
  },
  "6": {
    status: "passed",
    executionTime: 98,
    legacyOutput: '{"results": 15, "query": "laptop"}',
    newOutput: '{"results": 15, "query": "laptop"}',
  },
}

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(mockProject)  
  const [currentScreen, setCurrentScreen] = useState<Screen>("generated-tests")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const handleRegisterProject = () => {
    // Simulate project registration
    alert("Project registration modal would open here")
  }

  const handleGenerateTests = () => {
    setCurrentScreen("generated-tests")
    setIsGenerating(true)
  }

  const handleRunTests = () => {
    setCurrentScreen("test-results")
    setIsRunning(true)
  }
  
  
  return(
    <Sidebar
    currentProject={currentProject}
    currentScreen={currentScreen}
    onRegisterProject={handleRegisterProject}
    onGenerateTests={handleGenerateTests}
    onRunTests={handleRunTests}
    />
  )
}
export default App;